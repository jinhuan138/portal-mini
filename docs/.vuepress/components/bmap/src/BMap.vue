<!--
 * @Author: zhoushiyong
 * @LastEditors: Zhou Shiyong
 * @email: zhoushiyong@agree.com.cn
 * @Date: 2020-12-30 09:35:48
 * @LastEditTime: 2021-01-06 15:02:16
-->
<template>
  <div class="aui-map">
    <div class="aui-map__app-container" style="margin: 10px 20px 15px 20px">
      <aui-form ref="form" :model="form" label-width="110px">
        <aui-form-item
          :label="aui.map.address + '：'"
          prop="address"
          v-if="queryShow"
        >
          <aui-search
            style="width: 100%"
            popper-class="autoAddressClass"
            v-model="form.address"
            :trigger-on-focus="false"
            :placeholder="aui.map.address"
            clearable
            :fetch-suggestions="querySearchAsync"
            @select="handleSelect"
          >
            <template slot-scope="{ item }">
              <div style="overflow: hidden">
                <div class="title">{{ item.title }}</div>
                <span class="address ellipsis">{{ item.address }}</span>
              </div>
            </template>
          </aui-search>
        </aui-form-item>
        <aui-form-item :label="'aui.map.mapPosition' + '：'">
          <div id="map-container" style="width: 100%; height: 500px"></div>
        </aui-form-item>
      </aui-form>
    </div>
  </div>
</template> 

<script>
const loadBMap = function (ak) {
  return new Promise(function (resolve, reject) {
    if (typeof window.BMap !== "undefined") {
      resolve(window.BMap);
      return true;
    }
    window.onBMapCallback = function () {
      resolve(window.BMap);
    };
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "http://api.map.baidu.com/api?v=3.0&ak=" +
      ak +
      "&callback=onBMapCallback";
    script.onerror = reject;
    document.head.appendChild(script);
  });
};
export default {
  name: "AuiMap",
  mixins: [],
  data() {
    return {
      form: {
        address: "", // 详细地址
        addrPoint: {
          lng: 0,
          lat: 0,
        }, // 详细地址经纬度
      },
      map: "", // 地图实例
      mk: "", // Marker实例
      locationPoint: null,
    };
  },

  props: {
    //是否展示检索框
    queryShow: {
      type: Boolean,
      default: false,
    },
  },

  async mounted() {
    await loadBMap("6vroFeXqIdvPEgBHhM4gycBGTVuEOHfZ"); // 加载引入BMap
    this.initMap();
  },

  methods: {
    // t(...args) {
    //   return t.apply(this, args);
    // },
    // 初始化地图
    initMap() {
      let that = this;
      // 挂载地图
      this.map = new BMap.Map("map-container", { enableMapClick: false });
      //默认位置
      let point = new BMap.Point(112.960404, 28.23123);
      this.map.centerAndZoom(point, 19);
      //设置图像标注并绑定拖拽标注结束后事件
      this.mk = new BMap.Marker(point, { enableDragging: true });
      this.mk.addEventListener("dragend", function (e) {
        that.getAddrByPoint(e.point);
      });
      //绑定点击地图任意点事件
      this.map.addEventListener("click", function (e) {
        that.getAddrByPoint(e.point);
      });
    },
    //设置中心点位置
    setCenter(center) {
      let point = new BMap.Point(parseFloat(center[0]), parseFloat(center[1]));
      this.map.setCenter(point);
    },
    //设置是否缩放,默认为false
    setZooming(zooming) {
      if (zooming) {
        this.map.enableScrollWheelZoom();
      }
    },
    //设置缩放比例级别(1-19)
    setZoom(zoom) {
      this.map.setZoom(zoom);
    },
    //是否添加平移缩放控件，默认为false
    addControl(control) {
      if (control) {
        this.map.addControl(
          new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            type: BMAP_NAVIGATION_CONTROL_SMALL,
          })
        );
      }
    },
    //设置是否可拖拽，默认为true
    setDragging(dragging) {
      if (dragging) {
        this.map.disableDragging();
      }
    },
    //获取两个点的直线距离
    getDistance(start, end) {
      let StartPoint = new BMap.Point(
        parseFloat(start[0]),
        parseFloat(start[1])
      );
      let EndPoint = new BMap.Point(parseFloat(end[0]), parseFloat(end[1]));
      let distance = this.map.getDistance(StartPoint, EndPoint);
      return distance;
    },
    //位置检索
    querySearchAsync(str, cb) {
      let options = {
        onSearchComplete: function (res) {
          let s = [];
          if (local.getStatus() == BMAP_STATUS_SUCCESS) {
            for (let i = 0; i < res.getCurrentNumPois(); i++) {
              s.push(res.getPoi(i));
            }
            cb(s);
          } else {
            cb(s);
          }
        },
      };
      let local = new BMap.LocalSearch(this.map, options);
      local.search(str);
    },
    //选择地址地图自动地位
    handleSelect(item) {
      this.form.address = item.address + item.title;
      this.form.addrPoint = item.point;
      this.map.clearOverlays();
      this.mk = new BMap.Marker(item.point);
      this.map.addOverlay(this.mk);
      this.map.panTo(item.point);
    },
    //逆地址解析函数
    getAddrByPoint(point) {
      let that = this;
      let geco = new BMap.Geocoder();
      geco.getLocation(point, function (res) {
        that.mk.setPosition(point);
        that.map.panTo(point);
        that.form.address = res.address;
        that.form.addrPoint = point;
      });
    },
    //浏览器定位
    geolocation() {
      let that = this;
      let geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function (res) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            that.getAddrByPoint(res.point); //当成功时，调用逆地址解析函数
          } else {
            alert("failed" + this.getStatus()); //失败时，弹出失败状态码
          }
        },
        { enableHighAccuracy: true }
      );
    },
    //定义标注图标与文字
    addOverlay(
      point,
      iconPath,
      iconSize,
      iconOffset,
      imageOffset,
      text,
      labelOffset
    ) {
      let bdPoint = new BMap.Point(parseFloat(point[0]), parseFloat(point[1]));
      let marker = BMap.Marker;
      if (!iconPath || !iconSize || !iconOffset || !imageOffset) {
        marker = new BMap.Marker(bdPoint);
        this.map.addOverlay(marker);
        this.setCenter(point);
      } else {
        let iconSizeArr = iconSize.split(",");
        let imageOffsetArr = imageOffset.split(",");
        let myIcon = new BMap.Icon(
          iconPath,
          new BMap.Size(parseInt(iconSizeArr[0]), parseInt(iconSizeArr[1])),
          new BMap.Size(
            parseInt(imageOffsetArr[0]),
            parseInt(imageOffsetArr[1])
          )
        );
        marker = new BMap.Marker(bdPoint, myIcon);
        this.map.addOverlay(marker);
        this.setCenter(point);
      }
      //文本标注
      if (text) {
        let label = BMap.Label;
        if (labelOffset) {
          let labelOffsetArr = labelOffset.split(",");
          label = new BMap.Label(
            text,
            new BMap.Size(
              parseInt(labelOffsetArr[0]),
              parseInt(labelOffsetArr[1])
            )
          );
        } else {
          label = new BMap.Label(text);
        }
        this.map.addOverlay(label);
      }
    },
    //自定义纯文本信息窗口
    addTextInfoWindow(opts, message) {
      let infoWindow = new BMap.InfoWindow(message, opts); // 创建信息窗口对象
      this.map.openInfoWindow(infoWindow, this.map.getCenter()); //开启信息窗口
    },
    //自定义复杂信息窗口
    addComplexInfoWindow(sContent) {
      let marker = new BMap.Marker(this.map.getCenter());
      let infoWindow = new BMap.InfoWindow(sContent); //创建信息窗口对象
      this.map.addOverlay(marker);
      marker.addEventListener("click", function () {
        // 调用了marker对象的openInfoWindow方法
        this.openInfoWindow(infoWindow);
      });
    },
    //设置轨迹
    setTrajectory(trajectory) {
      let points = new Array();
      if (trajectory) {
        trajectory.forEach((element) => {
          let arr = element.split(",");
          let ele = new Array();
          ele.push(arr);
          if (ele[0].length === 2) {
            let point = new BMap.Point(
              parseFloat(ele[0][0]),
              parseFloat(ele[0][1])
            );
            points.push(point);
          }
        });

        this.drawWalktrack(this.map, points);
      }
    },
    drawWalktrack(map, points) {
      let begin = new BMap.Label(
        'aui.map.startPoint',
        new BMap.Size(20, -10)
      );
      let end = new BMap.Label(
        'aui.map.startPoint',
        new BMap.Size(20, -10)
      );
      let dPoints = points.slice(0);

      let first = dPoints.shift();
      let mFirst = new BMap.Marker(first);

      mFirst.setLabel(begin);
      map.addOverlay(mFirst);

      let last = dPoints.pop();
      let mLast = new BMap.Marker(last);
      mLast.setLabel(end);
      map.addOverlay(mLast);
      map.setCenter(last);

      //增加折线
      let strokeColor = "red";
      let strokeWeight = 2;
      let strokeOpacity = 0.5;
      let polyline = new BMap.Polyline(
        points,
        strokeColor,
        strokeWeight,
        strokeOpacity
      ); //创建折线
      map.addOverlay(polyline);
    },
    //规划开车路线导航
    drivingRouteSearch(start, end) {
      let driving = new BMap.DrivingRoute(this.map, {
        renderOptions: { map: this.map, autoViewport: true },
      });
      let startPoint = start.toString();
      let endPoint = end.toString();
      if (startPoint.indexOf(",") > 0 && endPoint.indexOf(",") > 0) {
        let points = new Array();
        if (startPoint.indexOf(",") > 0) {
          let ps = new Array();
          ps = startPoint.split(",");
          if (ps.length > 1) {
            let p = new BMap.Point(parseFloat(ps[0]), parseFloat(ps[1]));
            points.push(p);
          }
        }
        if (endPoint.indexOf(",") > 0) {
          let ps = new Array();
          ps = endPoint.split(",");
          if (ps.length > 1) {
            let p = new BMap.Point(parseFloat(ps[0]), parseFloat(ps[1]));
            points.push(p);
          }
        }
        driving.search(points[0], points[1]);
      } else {
        driving.search(start, end);
      }
    },
    //规划步行路线导航
    walkingRouteSearch(start, end) {
      let startPoint = start.toString();
      let endPoint = end.toString();
      let walking = new BMap.WalkingRoute(this.map, {
        renderOptions: { map: this.map, autoViewport: true },
      });
      if (startPoint.indexOf(",") > 0 && endPoint.indexOf(",") > 0) {
        let points = new Array();
        if (startPoint.indexOf(",") > 0) {
          let ps = new Array();
          ps = startPoint.split(",");
          if (ps.length > 1) {
            let p = new BMap.Point(parseFloat(ps[0]), parseFloat(ps[1]));
            points.push(p);
          }
        }
        if (endPoint.indexOf(",") > 0) {
          let ps = new Array();
          ps = endPoint.split(",");
          if (ps.length > 1) {
            let p = new BMap.Point(parseFloat(ps[0]), parseFloat(ps[1]));
            points.push(p);
          }
        }
        walking.search(points[0], points[1]);
      } else {
        walking.search(start, end);
      }
    },
    //清楚所有覆盖物
    removeAllOverlay() {
      this.map.clearOverlays();
    },
  },
};
</script>

<style lang="scss" scoped>
.autoAddressClass {
  li {
    .title {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .address {
      line-height: 1;
      font-size: 12px;
      color: #b4b4b4;
      margin-bottom: 5px;
    }
  }
}
</style>