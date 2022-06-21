<template>
  <div class="quick-entry">
    <h1 class="section-title-size" v-if="title">{{ title }}</h1>
    <p class="section-des-size description-color" v-if="description">
      {{ description }}
    </p>
    <ul class="quick-entry-content">
      <div class="quick-entry__item" v-for="(externalLink, i) in externalLinkInfoList" :key="i">
        <a class="quick-entry__item--link text-decoration-none" href="javascript:void(0)"
          @click="enterItem(externalLink.url)" rel="noopener noreferrer">
          <!-- <span class="quick-entry__item--mark"></span> -->
          <h3 class="section-item-title-size">{{ externalLink.title }}</h3>
          <!-- <p>{{ externalLink.des }}</p> -->
        </a>
      </div>
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
      externalLinkInfoList: [
        {
          title: "R105",
          url: "http://agree-ab.gitee.io/guide/#/",
          description: "http://agree-ab.gitee.io/guide/#/",
        },
        {
          title: "ACaaS",
          url: "https://docs.acaas.info:31443/ACaaSDocs/",
          description: "https://docs.acaas.info:31443/ACaaSDocs/",
        },
        {
          title: "Gitlab",
          url: "http://192.9.200.187/",
          description: "http://gitlab.agree.com.cn",
        },
        {
          title: "OA",
          url: "http://192.168.180.160:16088",
          description: "http://oa.agree.com.cn",
        },
        {
          title: "代码库",
          url: "/repository/",
          description: "http://afex.gitee.io/repository",
        },
        {
          title: "Tapd",
          url: "https://www.tapd.cn",
          description: "https://www.tapd.cn",
        },
        {
          title: "邮箱",
          url: "http://mail.agree.com.cn/",
          description: "http://mail.agree.com.cn/",
        },
        {
          title: "分支列表",
          url: "/project-releases/",
          description: "project-release",
        },
      ],
    };
  },
  methods: {
    enterItem(url) {
      isHttp(url) ? window.open(url) : this.$router.push(url);
    },
  },
};
</script>
<style lang='scss' scoped>
.quick-entry-content {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 10px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 8px 8px 5px -2px #ebeef5;

  .quick-entry__item {
    width: 20%;

    .quick-entry__item--link {
      height: 70px;
      color: #000;
      display: flex;
      align-items: center;
      padding: 0 10%;

      .quick-entry__item--mark {
        width: 20px;
        height: 20px;
        margin-right: 15%;
        border-radius: 50%;
        background: #37c8cb;
      }

      &::before {
        content: "⚪";
        margin-right: 15%;
      }

      &:hover {
        background: #d2f1f8;
        border-radius: 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .quick-entry-content .quick-entry__item {
    width: 33.33%;
  }
}
</style>