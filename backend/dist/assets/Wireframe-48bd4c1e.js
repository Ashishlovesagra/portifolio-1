import{r as e,a,F as o}from"./index-cfddcf52.js";import"./carousel.min-069fc7e5.js";function g({val:r}){const[n,i]=e.useState([]);return e.useEffect(()=>{fetch(`/api/image/${r}`).then(t=>t.json()).then(t=>{i(t.images)}).catch(t=>{console.log(t)})},[]),a(o,{children:n.map(function(t,s){return a("div",{children:a("img",{src:t,loading:"lazy",alt:""})},s)})})}export{g as W};
