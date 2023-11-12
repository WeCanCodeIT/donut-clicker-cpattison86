var clicks = 0
let autoClickerCount = 0

    function activateAutoClicker() {
        if (clicks >= 100){
            clicks -= 100
            counter.innerHTML = clicks;
            autoClickerCount ++
            setInterval(() => {
                clicks += autoClickerCount
                counter.innerHTML = clicks;
            }, 1000)
        }
    }


        function increment(){
            clicks = clicks + 1;
                counter.innerHTML = clicks;
        }
        function reset(){
            autoClickerCount = 0
            clicks = 0
            counter.innerHTML = clicks
        }



