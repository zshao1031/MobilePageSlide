var page = 0;
var phoneDeg = 0;
var menuButton_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click14.wav");
var screen_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click18.wav");
var homeButton_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");
var wiggle_audio = new Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");
var turnAround_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click14.wav");

//等網頁全部載入後才會執行的程式碼(jQuery)
$(document).ready(function()
{

    //點手機名稱按鈕時，切換手機尺寸
    $(".phone1").click(function()
    {
        menuButton_audio.play();
        $(".screen").css("width","");
        $(".screen").css("height","");
        $(".phoneName").text($(this).text());
    });

    $(".phone2").click(function()
    {   
        menuButton_audio.play();
        $(".screen").css("width","250px");
        $(".screen").css("height","420px");
        $(".phoneName").text($(this).text());
    });

    $(".phone3").click(function()
    {   
        menuButton_audio.play();
        $(".screen").css("width","270px");
        $(".screen").css("height","440px");
        $(".phoneName").text($(this).text());
    });

    $(".phone4").click(function()
    {   
        menuButton_audio.play();
        $(".screen").css("width","300px");
        $(".screen").css("height","480px");
        $(".phoneName").text($(this).text());
    });

    //點wiggle鍵時，讓手機左右震動一會
    $(".wiggle").click(function()
    {
        wiggle_audio.play();
        //記算震動次數用的計數
        var time = 0;

        //每60毫秒執行一次wigglePhone function
        var wiggleTime = setInterval(wigglePhone, 60);

        //讓手機震動的function
        function wigglePhone()
        {
            if (time >= 21 )
            {
                //將手機擺回原本的位置
                $(".phone").css("left", "");
                //將setInterval取消，才不會一直計時下去
                clearInterval(wiggleTime);
            }
            else
            {
                time++;
                //依照奇數次、偶數次位移不動方向，連續位移看起來就像震動
                if (time%2 == 0)
                {
                    $(".phone").css("left", "-30px");
                }
                else
                {
                    $(".phone").css("left", "30px");
                }
            }
        }
    });

    //點turn around鍵時，讓手機旋轉
    $(".turnAround").click(function(){
        turnAround_audio.play();
        phoneDeg += 360;
        $(".phone").css("transform", "rotate(" + phoneDeg + "Deg)");
    });


    //點畫面時，滑動切換頁面，將screen頁面切換至下一頁
    $(".screen").click(function()
    {
        screen_audio.play();
        
        if (page == 2)
        { 
            page = 0; 
        } 
        else 
        { 
            page++; 
        }

        $(".pages").css("left", page * (-100) + "%");
    });

    //點HOME鍵時，將screen頁面切換至第一頁
    $(".homeButton").click(function()
    {
        homeButton_audio.play();
        
        page = 0;
        $(".pages").css("left", page * (-100) + "%");
    });

    
});


    

