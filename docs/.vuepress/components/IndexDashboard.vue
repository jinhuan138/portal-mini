<template>
  <div class="dashboard">
    <h1 class="section-title-size" v-if="title">{{ title }}</h1>
    <p class="section-des-size description-color" v-if="description">
      {{ description }}
    </p>
    <ul class="dashboard-docs">
      <li
        class="dashboard-docs__item"
        v-for="(item, index) in productsInfoList"
        :key="index"
      >
        <a
          href="javascript:void(0)"
          :class="[
            'dashboard-docs__item--link',
            item.disabled ? 'dashboard-docs__item--disabled' : '',
            'text-decoration-none',
          ]"
          rel="noopener noreferrer"
          @click="enterItem(item.url)"
        >
          <img :src="item.icon" />
          <h3 class="section-item-title-size">{{ item.title }}</h3>
          <p class="section-item-des-size">{{ item.description }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
const isHttp = (path) => {
  let regex = /^(http|https):\/\/.*/gi;
  return regex.test(path);
};
export default {
  props: ["title", "description"],
  data() {
    return {
      productsInfoList: [
        {
          id: 1,
          title: "组件库",
          description: "提供针对不同场景的独立组件库，简化开发、提升效率",
          value: "aui",
          url: "/aui",
          icon: "images/logo4.png",
        },
        {
          id: 2,
          title: "前端开发规范",
          description: "前端代码编写规范，统一风格便于review",
          value: "git-guide",
          url: "/git-guide",
          icon: "images/logo1.png",
        },
        {
          id: 3,
          title: "JS SDK",
          description:
            "基于JavaScript开发，部分可跨平台使用的库，对交易和应用开发提供支撑",
          value: "sdk",
          url: "/sdk",
          icon: "images/logo3.png",
        },
        {
          id: 4,
          title: "移动开发统一门户",
          description: "原生移动开发平台，小程序开发平台，移动运营平台",
          value: "miniprogram-dev",
          url: "http://192.168.180.26:9000/",
          icon: "images/logo3.png",
        },
        {
          id: 5,
          title: "微前端",
          description: "多工程模式，开箱即用，子应用单独部署，互不干扰",
          value: "micro-frontends",
          url: "/micro-frontends",
          icon: "images/logo3.png",
        },
        {
          id: 7,
          title: "git规范及说明",
          description: "代码版本管理规范及基本操作手册",
          value: "git",
          url: "/git",
          icon: "images/logo4.png",
        },
        {
          id: 8,
          title: "私库使用指南",
          description: "npm私有仓库的查看、发布及安装介绍",
          value: "npm",
          url: "/npm/",
          icon: "images/logo1.png",
        },
        {
          id: 9,
          title: "知识库",
          description: "知识库文档中心",
          value: "files",
          url: "/files.html",
          icon: "images/logo4.png",
        },
      ],
    };
  },
  methods: {
    enterItem(url) {
      if (url === "/files.html") return window.open("/portal" + url,'_self');
      isHttp(url) ? window.open(url) : this.$router.push(url);
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../styles/base.scss';
ul, li {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    overflow: hidden;
}
.flex {
    display: flex;
    align-items: center;
    
    .style-switch-label{
        font-size: 14px;
    }
}
.dashboard {
  .dashboard-docs {
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    .dashboard-docs__item {
      width: 25%; // 默认显示4列
      padding: 10px;

      .dashboard-docs__item--link {
        display: block;
        width: 100%;
        height: 100%;
        padding: 5px;
        border-radius: 30px;
        background: #fff;
        color: #000;
        box-shadow: 8px 8px 5px -2px #ebeef5;
        transition: transform 0.3s;
        transition: box-shadow 0.3s;
        transition: color 0.3s;
        transition: background 0.3s;

        & > img {
          width: 50%;
        }
      }

      .dashboard-docs__item--disabled {
        background: rgba(59, 59, 59, 0.3);
        cursor: not-allowed;

        & > img {
          opacity: 0.3;
        }
      }
    }
  }
}
@for $i from 1 through 5 {
    .flex-#{$i} {
        flex: $i;
    }
}
.text-decoration-none {
    text-decoration: none;
}
.border-none {
    border: none;
}
.display-none {
    display: none;
}
.description-color {
    color: #7d8aaa;
    font-weight: 700;
}
.error-color {
    color: red;
}
.success-color {
    color: green;
}

@media (hover: hover) {
  .dashboard
    .dashboard-docs
    .dashboard-docs__item
    .dashboard-docs__item--link:not(.dashboard-docs__item--disabled):hover {
    color: #fff;
    background: #37c8cb;
    box-shadow: 10px 8px 3px -3px #d2f1f8;
    transform: scale(1.03);
  }
}
@media screen and (min-width: 1200px) {
  .banner-title-size {
    font-size: 2.25rem;
  }
  .banner-des-size {
    font-size: 1.5rem;
  }
  .section-title-size {
    font-size: 2rem;
  }
  .section-des-size {
    font-size: 1.25rem;
  }
  .section-item-title-size {
    font-size: 1.5rem;
  }
  .section-item-des-size {
    font-size: 1rem;
  }
}
@media screen and (max-width: 1200px) {
  .banner-title-size {
    font-size: 2rem;
  }
  .banner-des-size {
    font-size: 1.33rem;
  }
  .section-title-size {
    font-size: 1.78rem;
  }
  .section-des-size {
    font-size: 1.11rem;
  }
  .section-item-title-size {
    font-size: 1.33rem;
  }
  .section-item-des-size {
    font-size: 0.89rem;
  }
}
@media screen and (max-width: 768px) {
  .banner-title-size {
    font-size: 1.88rem;
  }
  .banner-des-size {
    font-size: 1.25rem;
  }
  .section-title-size {
    font-size: 1.67rem;
  }
  .section-des-size {
    font-size: 1.04rem;
  }
  .section-item-title-size {
    font-size: 1.25rem;
  }
  .section-item-des-size {
    font-size: 0.83rem;
  }
}
@media screen and (max-width: 468px) {
  .banner-title-size {
    font-size: 1.5rem;
  }
  .banner-des-size {
    font-size: 1rem;
  }
  .section-title-size {
    font-size: 1.33rem;
  }
  .section-des-size {
    font-size: 0.83rem;
  }
  .section-item-title-size {
    font-size: 1rem;
  }
  .section-item-des-size {
    font-size: 0.67rem;
  }
}
</style>