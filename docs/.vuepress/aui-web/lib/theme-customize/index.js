import { themeStyle } from './theme.js'

const THEME = {
    setTheme(val) {
        let baseTheme = this.getThemeCluster("#409EFF".replace("#", ""));
        let newTheme = this.getThemeCluster(val.replace("#", ""));
        let styleTagContent = this.updateStyle(themeStyle, baseTheme, newTheme);

        this.addStyleTag(styleTagContent, window);
    },

    addStyleTag(content, win) {
        let frames = win.frames,
            len = frames.length,
            currentDocument = win.document,
            styleTag = currentDocument.getElementById('aui-customize-theme');

        if (!styleTag) {
            styleTag = currentDocument.createElement("style");
            styleTag.setAttribute("id", "aui-customize-theme");
        }
        styleTag.innerText = content;
        currentDocument.head.appendChild(styleTag);

        // 设置子iframe的主题
        if(len > 0) {
            for(let i=0; i<len; i++) {
                // 过滤没有head和body的空iframe，如：为解决内嵌控件遮挡问题所使用的空iframe
                if(frames[i].document.head.innerText) {
                    this.addStyleTag(content, frames[i]);
                }
            }
        }
    },

    updateStyle(style, oldCluster, newCluster) {
        let newStyle = style;
        oldCluster.forEach((color, index) => {
            newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
        });
        return newStyle;
    },

    getThemeCluster(theme) {
        const tintColor = (color, tint) => {
            let red = parseInt(color.slice(0, 2), 16);
            let green = parseInt(color.slice(2, 4), 16);
            let blue = parseInt(color.slice(4, 6), 16);

            if (tint === 0) {
                // when primary color is in its rgb space
                return [red, green, blue].join(",");
            } else {
                red += Math.round(tint * (255 - red));
                green += Math.round(tint * (255 - green));
                blue += Math.round(tint * (255 - blue));

                red = red.toString(16);
                green = green.toString(16);
                blue = blue.toString(16);

                return `#${red}${green}${blue}`;
            }
        };

        const shadeColor = (color, shade) => {
            let red = parseInt(color.slice(0, 2), 16);
            let green = parseInt(color.slice(2, 4), 16);
            let blue = parseInt(color.slice(4, 6), 16);

            red = Math.round((1 - shade) * red);
            green = Math.round((1 - shade) * green);
            blue = Math.round((1 - shade) * blue);

            red = red.toString(16);
            green = green.toString(16);
            blue = blue.toString(16);

            return `#${red}${green}${blue}`;
        };

        const clusters = [theme];
        for (let i = 0; i <= 9; i++) {
            clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
        }
        clusters.push(shadeColor(theme, 0.1));
        return clusters;
    }
}

export {
    THEME
};

export default THEME;