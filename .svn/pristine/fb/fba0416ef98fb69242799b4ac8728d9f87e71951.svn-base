<template>
  <i-blank style="background:#f8f8f8">
    <i-space></i-space>
    <i-input iconf="icon-sousuo" type="o" icone="icon-sousuo"></i-input>
    <i-space></i-space>
    <i-button type='ghost' block>block</i-button>
    <i-space></i-space>
    <i-input icone="icon-sousuo"></i-input>
    <i-space></i-space>
    <i-input icone="icon-weibiaoti35" placeholder="请输入..." mold="line"></i-input>
    <i-space></i-space>
    <i-input state="warning">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
    </i-input>
    <i-space></i-space>
    <i-input placeholder="请输入密码..." mold="line" type="password" state="right">
      <span slot="prepend"><i class="iconfont icon-wode"></i></span>
    </i-input>
    <i-space></i-space>
    <i-input placeholder="请输入..." mold="line" v-model="value" state="error">
      <span slot="prepend">
       <select name="" id="">
       <option value="">+18</option>
       <option value="">+69</option>
       </select>
       <i class="iconfont icon-weibiaoti35"></i>
       </span>
    </i-input>
    <i-space></i-space>
    {{value}}
<ul class="progress">
   <li  class="Skill" data-percent="100%">
        <svg viewBox="-10 -10 220 220">
        <g fill="none" stroke-width="2" transform="translate(100,100)">
        <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)"/>
        <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)"/>
        <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)"/>
        <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)"/>
        <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)"/>
        <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)"/>
        </g>
        </svg>
        <svg viewBox="-10 -10 220 220">
        <path d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" stroke-dashoffset="547"></path>
        </svg>
    </li>
</ul>
   

  </i-blank>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
<style type="text/css">
.Skill{
  transform: scale(0.3,0.3)
}
body{background-color: #fff}
@-webkit-keyframes load {
  0% {
    stroke-dashoffset: 0;
  }
}
@keyframes load {
  0% {
    stroke-dashoffset: 0;
  }
}
.progress {
  position: relative;
  display: inline-block;
  padding: 0;
  text-align: center;
}
.progress > li {
  display: inline-block;
  position: relative;
  text-align: center;
  color: #93A2AC;
  font-family: Lato;
  font-weight: 100;
  margin: 2rem;
}
.progress > li:before {
  content: attr(data-name);
  position: absolute;
  width: 100%;
  bottom: -2rem;
  font-weight: 400;
}
.progress > li:after {
  content: attr(data-percent);
  position: absolute;
  width: 100%;
  top: 3.7rem;
  left: 0;
  font-size: 2rem;
  text-align: center;
}
.progress svg {
  width: 10rem;
  height: 10rem;
}
.progress svg:nth-child(2) {
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
.progress svg:nth-child(2) path {
  fill: none;
  stroke-width: 25;
  stroke-dasharray: 629;
  stroke: #fff;
  opacity: .9;
  -webkit-animation: load 10s;
          animation: load 10s;
}
</style>


