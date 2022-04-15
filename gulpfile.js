const { src, dest, series, task } = require('gulp');
const clean = require('gulp-clean');
const replace = require('gulp-replace');
const { join } = require("path")
const fs = require("fs");
const header = require('gulp-header');
const gulpif = require('gulp-if');
const rename = require("gulp-rename");

//clean
function cleanDocs() {
  const path = join(__dirname, './docs/Aui/')
  return src(path, { read: false })
    .pipe(clean())
    .pipe(dest(path))
}

//aui-web markdown
const webNav = fs.readFileSync('E:\\agree\\aui-web\\examples\\router\\page-nav.json', 'utf-8')
const whiteList = ['/changelog', '/icon', '/search',]//白名单
const webMd = eval(webNav).map(i => {
  if (whiteList.indexOf(i.path) === -1) {
    if (i.path === '/guide') return ('')
    else return ('/Aui' + i.path)  //'/button'==>'/Aui/button'
  }
})
function copy(path, name) {
  return src(join(`E:\\agree\\aui-web\\docs/${path}.md`))
    .pipe(gulpif(path === '/guide', rename(path => ({ dirname: path.dirname, basename: 'README', extname: ".md" }))))//guide=>README
    .pipe(replace('#####', '##'))
    .pipe(header(`## ${name}\n`, { name }))//添加标题
    .pipe(replace(new RegExp(`## ${name}\n## ${name}\n`, 'i'), `## ${name}\n`))//删除添重复标题
    .pipe(replace('\n\n\`\`\`html', '\n\`\`\`html'))//取消```html换行
    .pipe(dest(join(__dirname, './docs/Aui/')))
}
//err:[ readme.md:span ,popover.md:headData]
function copyAuiWebDocs(done) {
  eval(nav).forEach(i => {
    if (whiteList.indexOf(i.path) === -1) {
      copy(i.path, i.name)
    }
  });
  SideBar()
  done()
}

//aui-web SideBar
function SideBar() {
  const nav = JSON.stringify(webMd.filter(i => i))//map后白名单的为undefined
  const navTemplate = `module.exports = [
    {
      title:'Aui',
      collapsable: true,
      children:${nav}
    },
  ]`
  fs.writeFile(join(__dirname, '/docs/Aui/sidebar.js'), navTemplate, e => { e && console.log(e) })
}
//Sdk
const adkPath = 'E:\\agree\\portal-pro\\src\\views\\sdk\\2.x'
function copySdkDocs() {
  fs.readdir(adkPath, (err, files) => {
    if (err) {
      console.log(err)
    } else {
      //生成sidebar
      const sidebar = files.map(i => {
        const name = i.replace('.md', '')
        return  '/Sdk/' + name //ab-logger-upload=>sdk/ab-logger-upload
      })
      const navTemplate = `module.exports = [
        {
          title:'Sdk',
          collapsable: true,
          children:${JSON.stringify(sidebar)}
        },
      ]`
      console.log(sidebar)
      fs.writeFile(join(__dirname, '/docs/Sdk/sidebar.js'), navTemplate, e => { e && console.log(e) })
      // files.forEach(i=>{
      //   fs.copyFileSync(join(adkPath,i), join(__dirname,'/docs/Sdk/',i))
      // })
    }
  })
}
copySdkDocs()
task('prepare', series(cleanDocs, copyAuiWebDocs))
task('clean', series(cleanDocs))
