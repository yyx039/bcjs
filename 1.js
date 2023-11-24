setInterval(()=>{
const x = document.querySelector('#box').children
const colors = []
for (var i = 0; i < x.length; i++) {
    colors.push({
        color: x[i].style.backgroundColor,
        ele: x[i]
    })
}

// 找出颜色最少的color, 并且对它进行 ele.click()
const map = new Map()
colors.forEach((item) => {
    map.set(item.color, map.has(item.color) ? map.get(item.color) + 1 : 1)
}
)
let min = Infinity
let minKey = null
for (let [key, value] of map) {
    if (value < min) {
        min = value
        minKey = key
    }
}
colors.forEach((item) => {
    if (item.color === minKey) {
        item.ele.click()
        console.log(item.ele);
    }
}
)
    
},50)
