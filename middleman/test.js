var tabs = Array();
tabs["76561198070692664"]='big';
tabs["76561198093727182"]='big';
tabs["76561198094462805"]='big';
tabs["76561198069720171"]='big';
tabs["76561198064686095"]='small';
tabs["76561198093631883"]='small';
tabs["76561198078242922"]='small';
tabs["76561198075686650"]='small';
tabs["76561198095677527"]='small';
var indexs = Array();
indexs["76561198070692664"]=0;
indexs["76561198093727182"]=1;
indexs["76561198094462805"]=2;
indexs["76561198069720171"]=3;
indexs["76561198064686095"]=0;
indexs["76561198093631883"]=1;
indexs["76561198078242922"]=2;
indexs["76561198075686650"]=3;
indexs["76561198095677527"]=4;
function GetandSet()
{

alert("0");
$.get(" http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=7E69FC006BC8CA3CFB64A4F808D4E24C&steamids=76561198070692664,76561198093727182,76561198094462805,76561198069720171,76561198064686095,76561198093631883,76561198078242922,76561198075686650,76561198095677527",function(data){
alert("1");
for( var i = 0 ; i < 9 ; i++)
{
if ( data.response.players[i].hasOwnProperty("gameid"))
{
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '游戏中';
}
else
{



switch (data.response.players[i].personastate){
case 0:
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '离线';
break;
case 1:
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '在线';
break;
case 2:
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '忙碌';
break;
case 3:
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '离开';
break;
case 4:
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '打盹';
break;
case 5:
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '想交易';
break;
case 6:
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '想游戏';
break;
default:
document.getElementById(tabs[data.response.players[i].steamid]).rows[indexs[data.response.players[i].steamid]].cells[3].innerText  = '状态未知';
} 
} //if
} //for
});
}
$(document).ready(function()
{
GetandSet();
});







