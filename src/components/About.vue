<template>
    <div class="whole">
        <div class="content">
            <h2>経歴</h2>
            <table>
                <tr v-for="data in careerData" v-bind:key="data.id">
                    <th>{{data.period}}</th>
                    <td v-html="data.content"></td>
                </tr>
            </table>
        </div>
        <div class="content">
            <h2>現在</h2>
            <div class="detail">
                千葉大学 工学部 総合工学科 情報工学コース 3年 <br>
                千葉大学 電子計算機研究会 <br>
                千葉大学 ノートテイク会
            </div>
        </div>
        <div class="content">
            <h2>趣味・興味</h2>
            <div class="detail">
                <h4>xR</h4>
                <div class="detail">
                    現実世界ではありえない表現をしたり，現実を拡張できるxR．<br>
                    現在VRを用いたゲームを制作中．
                </div>
            </div>
            <div class="detail">
                <h4>Vtuber/Vsinger</h4>
                <div class="detail">

                </div>
            </div>
            <div class="detail">
                <h4>EDM</h4>
                <div class="detail">
                    ジャンルは"Future Bass"など．
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import careerData from '@/assets/json/history.json'

export default {
  name: 'aboutme',
  data: function () {
    return {
      careerData: careerData
    }
  }
}
</script>

<style lang="scss" scoped>
.whole {
    height: 100%;
    margin: auto;
    overflow-y: auto;
}

.content {
    margin-bottom: 20px;
}

h2 {
    z-index: 2;
    position: sticky;
    top:0px;
    background: linear-gradient(to right, #FFFFFF,rgba(255, 255, 255, 0));
    margin: 0;
}

h4 {
    margin-bottom: 0;
}

table {
    width: 100%;
    border: 0px;
    border-collapse: collapse;
    border-spacing: 0;
}

tr {
    height: 40px;
    border-bottom: solid 2px #FFFFFF;
}

th {
    padding-left: 20px;
    text-align: left;
    background-color: $main-color;
    width: 150px;
    position: relative;
}

th::after {
  display: block;
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  top:calc(50% - 10px);
  right:-10px;
  border-left: 10px solid $main-color;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

td {
    background-color: #BBBBBB;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
}

.detail {
    padding-left: 20px;
}
</style>
