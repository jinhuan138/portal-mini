<template>
  <div class="index-page">
    <div class="main">
      <div class="team-banner">
        <div class="team-banner-item team-banner-content">
          <h1 class="banner-title banner-title-size">有温度的开发团队</h1>
          <p class="banner-des-size description-color">
            可以随时了解查阅前端平台现有产品及文档，加速信息传递和共享，加快信息交流，从而提高组员工作效率的平台
          </p>
        </div>
        <div class="team-banner-item team-banner-img">
          <img :src='$withBase("/banner.png")' />
        </div>
      </div>
      <index-dashboard title="文档中心" description="快速了解产品相关网站及开发文档，编码规范等"></index-dashboard>

      <index-quick title="快捷方式" description="快速进入代码仓库、OA、Tapd地址链接"></index-quick>

      <h1 class="section-title-size">更多功能</h1>
      <p class="section-des-size description-color">建设中...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home1"
};
</script>

<style lang='scss' scope>
@import '../styles/base.scss';

.main {
  max-width: 75%;
  margin: 0 auto;
  margin-top: 80px;
  padding-bottom: 40px;

  .banner-title {
    color: #132b50;
  }

  .team-banner {
    display: flex;
    flex-wrap: wrap;

    &>.team-banner-item {
      width: 50%;
    }

    .team-banner-img>img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 992px) {
  .main {
    min-width: 90%;
  }
}

@media screen and (max-width: 768px) {
  .main .team-banner {
    position: relative;

    .team-banner-content {
      position: absolute;
      z-index: 2;
    }

    .team-banner-img {
      position: relative;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        background: #fafbfe;
        filter: opacity(30%);
      }
    }

    &>.team-banner-item {
      width: 100%;
    }
  }
}

@media screen and (max-width: 468px) {
  .team-banner .team-banner-img::before {
    filter: opacity(60%);
  }
}

@media screen and (min-width: 1200px) {
  .banner-title-size {
    transform: scale(var(--scale));
    font-size: 2.25rem;
    transition: transform 0.3s;
  }

  .banner-title-size :hover {
    transform: scale(1.05, 1.05);
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