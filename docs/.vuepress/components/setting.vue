<template>
  <client-only>
    <div>
      <!-- 用户管理 -->
      <aui-card class="box-card card-style">
        <div slot="header" class="clearfix">
          <h1 class="card-title">01.用户管理</h1>
        </div>
        <div slot="default" class="card-content">
          <p class="card-content-title">
            <span>用户查询</span>
          </p>
          <div style="display: flex">
            <aui-input v-model="userName" label="用户名" placeholder="请输入要查询的用户名" @keydown.enter.native="filterUser">
            </aui-input>
            <aui-select label="角色" :options="roleOptions" v-model="role" clearable @keydown.enter.native="filterUser"
              placeholder="请选择要查询的角色">
            </aui-select>
            <aui-button style="margin-left: 60px" @click="filterUser">
              <i class="aui-icon-search"></i>查询
            </aui-button>
            <aui-button @click="cancelFilter">
              <i class="aui-icon-refresh"></i>
              重置
            </aui-button>
          </div>
          <!-- 表格 -->
          <aui-table class="table" :head-data="headData" :data="tableData" :isEdit="false" width="10"
            pagingType="complex" text-align="center"></aui-table>
          <!-- 分页 -->
          <div class="pag">
            <aui-pagination layout="prev, pager, next" :total="filterTableData.length" :current-page="page"
              @current-change="currentChange">
            </aui-pagination>
          </div>
        </div>
      </aui-card>
      <!-- 角色管理 -->
      <aui-card class="box-card card-style">
        <div slot="header" class="clearfix">
          <h1 class="card-title">02.角色管理</h1>
        </div>
        <div slot="default" class="card-content">
          <p class="card-tip">
            以下为各角色对应的权限，可进行新增以及删除权限修改。
          </p>
          <div v-for="(item, index) in roleAuthority" :key="index">
            <p class="card-content-title">
              <span>{{ item.roleName }}</span>
            </p>
            <div style="display:flex;flex-wrap: wrap; justify-content : space-between;">
              <aui-tag class="tag" v-for="(item, index) in item.authority" :background-color="item.authority.id | color"
                :key="index">{{ item.authority.authorityName }}</aui-tag>
            </div>
          </div>
        </div>
      </aui-card>
      <!-- 权限管理 -->
      <aui-card class="box-card card-style">
        <div slot="header" class="clearfix">
          <h1 class="card-title">03.权限管理</h1>
        </div>
        <div slot="default" class="card-content">
          <p class="card-tip">
            以下为全部现有权限，可进行新增以及删除权限修改。
          </p>
          <div style="display:flex;flex-wrap: wrap; justify-content : space-between;">
            <aui-tag class="tag" v-for="(item, index) in authorityList" :key="index"
              :background-color="item.id | color">{{ item.authorityName }}</aui-tag>
          </div>
        </div>
      </aui-card>
    </div>
  </client-only>
</template>

<script>
import authority from "../DB/findAuthority.json";
import roleAll from "../DB/findRoleAll.json";
import allUser from "../DB/getAllUser.js";
import authorityAll from "../DB/findAuthorityAll.json";
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
  name: "Setting",
  data() {
    return {
      userName: "",
      roleOptions: [],
      role: "",
      headData: [
        {
          label: "序号",
          prop: "id",
          isCopy: false,
        },
        {
          label: "用户名",
          prop: "name",
          isCopy: false,
        },
        {
          label: "工号",
          prop: "userId",
          isCopy: false,
        },
        {
          label: "角色",
          prop: "roleName",
          isCopy: false,
        },
        {
          label: "状态",
          prop: "statusType",
          isCopy: false,
        },
      ],
      page: 1,
      authority: [],
      originTableData: [], //所有用户
      tableData: [],
      filterTableData: [],
      roleAuthority: [], //角色对应权限
      authorityList: [], //所有权限
    };
  },
  filters: {
    color(val) {
      return tagColor[val];
    },
  },
  async mounted() {
    // await this.getRole();
    // this.getRoleAuthority();
    // this.findAuthorityAll();
    // this.getUserList();
    this.initDB();
  },
  methods: {
    //获取角色
    async getRole() {
      const {
        data: { findRoleAll },
      } = await this.$apollo.query({
        query: gql`
          query findRoleAll {
            findRoleAll {
              id
              roleName
              depts
            }
          }
        `,
      });
      findRoleAll.forEach((item) => {
        const obj = {
          value: item.id,
          label: item.roleName,
        };
        this.roleOptions.push(obj);
      });
    },
    //查询
    filterUser() {
      if (!this.role && !this.userName) {
        this.cancelFilter();
        return;
      }
      let filterTable = [];
      if (this.role) {
        filterTable = this.originTableData.filter(
          (item) => item.roleId === this.role
        );
      } else {
        filterTable = this.originTableData;
      }
      if (this.userName) {
        filterTable = filterTable.filter((item) =>
          item.name.includes(this.userName)
        );
      }
      this.filterTableData = filterTable;
      this.tableData = this.filterTableData.slice(0, 8);
    },
    //重置
    cancelFilter() {
      this.page = 1;
      this.role = "";
      this.userName = "";
      this.filterTableData = this.originTableData;
      this.tableData = this.filterTableData.slice(0, 8);
    },
    //获取所有用户
    async getUserList() {
      const {
        data: { getAllUser },
      } = await this.$apollo.query({
        query: gql`
          query getAllUser {
            getAllUser {
              id
              name
              userId
              role {
                id
                roleName
              }
              status {
                id
                statusType
              }
            }
          }
        `,
      });
      getAllUser.forEach((item) => {
        const { id, name, userId, role, status } = item;
        const person = {
          id,
          name,
          userId,
          roleName: role.roleName,
          roleId: role.id,
          statusType: status.statusType,
        };
        this.originTableData.push(person);
      });
      this.filterTableData = this.originTableData;
      this.tableData = this.filterTableData.slice(0, 8);
    },
    //获取角色对应权限
    async findAuthority(role) {
      const { value, label } = role;
      const {
        data: { findAuthority },
      } = await this.$apollo.query({
        query: gql`
          query findAuthority {
            findAuthority(id:${value}) {
              id
              role{
                id
                roleName
              }
              authority{
                id
                authorityName
              }
            }
          }
        `,
      });
      this.roleAuthority.push({
        id: value,
        roleName: label,
        authority: findAuthority,
      });
    },
    //获取所有角色对应权限
    async getRoleAuthority() {
      for (let i = 0; i < this.roleOptions.length; i++) {
        const element = this.roleOptions[i];
        await this.findAuthority(element);
      }
      console.log(this.roleAuthority);
    },
    //所有权限
    async findAuthorityAll() {
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
    currentChange(page) {
      this.tableData = this.filterTableData.slice(8 * (page - 1), 8 * page); //0-8 8-16 16-24
    },
    initDB() {
      roleAll.forEach((item) => {
        const obj = {
          value: item.id,
          label: item.roleName,
        };
        this.roleOptions.push(obj);
      });
      // allUser.forEach((item) => {
      //   const { id, name, userId, role, status } = item;
      //   const person = {
      //     id,
      //     name,
      //     userId,
      //     roleName: role.roleName,
      //     roleId: role.id,
      //     statusType: status.statusType,
      //   };
      //   this.originTableData.push(person);
      // });
      this.originTableData = allUser
      this.filterTableData = this.originTableData;
      this.tableData = this.filterTableData.slice(0, 8);
      this.authorityList = authorityAll;
      this.roleAuthority = authority;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-content {
  clear: both;
  overflow: hidden;

  .card-content-title {
    display: flex;
    align-items: center;
    height: 35px;
    padding-left: 25px;
    font-size: 20px;
    position: relative;
    z-index: 0;
    font-weight: bold;
  }

  .card-content-list {
    float: left;
    overflow: hidden;
    margin-bottom: 20px;
  }
}

.card-style {
  width: 96%;
  margin: 20px auto;
  padding-bottom: 20px;
  background: white;
  border-radius: 20px;
  overflow: hidden;

  .card-title {
    padding-left: 20px;
    padding-bottom: 20px;
    font-style: italic;
    z-index: 0;
    position: relative;

    &::after {
      display: block;
      content: " ";
      width: 200px;
      height: 25px;
      background: rgb(165, 202, 232);
      position: absolute;
      bottom: 20px;
      left: 20px;
      z-index: -1;
    }
  }

  .card-tip {
    padding-left: 20px;
  }
}

.box-card {
  margin: 20px;
}

.table {
  margin-top: 30px;
}

.tag {
  margin-right: 1.5rem;
  width: 8.7rem;
  height: 3rem;
  font-size: 16px;
  line-height: 3rem;
  margin-top: 0.5rem;
  text-align: center;
}

.pag {
  width: 25rem;
  margin-top: 0.5rem;

  .aui-pagination {
    // margin: 0 auto;
    margin-left: 35rem !important;
  }
}
</style>