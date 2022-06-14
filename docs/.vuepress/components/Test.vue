<template>
  <div>
    <aui-tag
      class="tag"
      v-for="(item, index) in authorityList"
      :key="index"
      :background-color="item.id | color"
      >{{ item.authorityName }}</aui-tag
    >
  </div>
</template>

<script>
import { gql } from "@apollo/client";
const tagColor = {
  3: "rgba(64,158,255,.1)", //default
  5: "rgba(144,147,153,.1)", //success
  10: "rgba(103,194,58,.1)", //info
  6: "rgba(230,162,60,.1)", //warning
  1: "rgba(245,108,108,.1)", //danger
  2: "rgb(141, 103, 248)",
  4: "rgba(64,158,255,.1)",
  8: "rgb(141, 103, 248)",
  7: "gold",
  9: "pink",
  11: "yellow",
  12: "skyblue",
};
export default {
  data() {
    return {
      authorityList: [],
    };
  },
  filters: {
    color(val) {
      return tagColor[val];
    },
  },
  async mounted() {
    const {
      data: { findAuthorityAll },
    } = await this.$apollo.query({
      query: gql`
        query findAuthorityAll {
          findAuthorityAll {
            id
            authorityName
          }
        }
      `,
    });
    this.authorityList = findAuthorityAll;
  },
};
</script>

<style  lang="scss" scope >
.tag {
  margin-right: 1.5rem;
  width: 8.7rem;
  height: 3rem;
  font-size: 16px;
  line-height: 3rem;
  margin-top: 0.5rem;
  text-align: center;
}
</style>