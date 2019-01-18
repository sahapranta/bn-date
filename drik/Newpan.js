// JavaScript Document
// This script (for tithi, nakshtra, yoga, karna) is a collected from diffrent sources and put together by Uttam Singha.
//Source 1: http://www.astrojyoti.com/dailypanchangadarshini
//Source 2: http://www.happyland.by.ru/tithi/scripts/panchang.htm  (closed already)
// Bangla Ponjika code by Uttam Singha, and this is a Drik Siddhanta Ponjika. 
//Please see other Bangla Ponjikas (like Surya Siddhanta, Bangla Academy) at http://www.ponjika.com
<!--
// globals
d2r = Math.PI/180;
r2d = 180/Math.PI;
var month = [ "জানুয়ারী",
                        "ফেব্রুয়ারী",
                        "মার্চ",
                        "এপ্রিল",
                        "মে",
                        "জুন",
                        "জুলাই",
                        "আগষ্ট",
                        "সেপ্টেম্বর",
                        "অক্টোবর",
                        "নভেম্বর",
                        "ডিসেম্বর"];
var zn = ["মেষ রাশি",
"বৃষ রাশি",
"মিথুন রাশি",
"কর্কট রাশি",
"সিংহ রাশি",
"কন্যা রাশি",
"তুলা রাশি",
"বৃশ্চিক রাশি",
"ধনু রাশি",
"মকর রাশি",
"কুম্ভ রাশি",
"মীন রাশি"];
var wd = " ";
var beng_month_name = new Array;
beng_month_name[0] 		= "চৈত্র";	
beng_month_name[1] 		= "বৈশাখ";
beng_month_name[2] 		= "জ্যৈষ্ঠ";
beng_month_name[3] 		= "আষাঢ়";
beng_month_name[4] 		= "শ্রাবণ";
beng_month_name[5] 		= "ভাদ্র";
beng_month_name[6] 		= "আশ্বিন";
beng_month_name[7] 		= "কার্তিক";
beng_month_name[8] 		= "অগ্রহায়ন";
beng_month_name[9] 		= "পৌষ";
beng_month_name[10] 	= "মাঘ";
beng_month_name[11] 	= "ফাল্গুন";
beng_month_name[12] 	= "চৈত্র";	

var range = [1,31,0,0,-3000,4000,0,23,0,59,-12,12,0,59];
 
  var tith = [" শুক্ল প্রতিপদ ",
                    "শুক্ল দ্বিতীয়া ",
                    "শুক্ল তৃতীয়া ",
                    "শুক্ল চতুর্থী ",
                    "শুক্ল পঞ্চমী ",
                    "শুক্ল ষষ্ঠী ",
                    "শুক্ল সপ্তমী ",
                    "শুক্ল অষ্টমী ",
                    "শুক্ল নবমী ",
                    "শুক্ল দশমী ",
                    "শুক্ল একাদশী ",
                    "শুক্ল দ্বাদশী ",
                    "শুক্ল ত্রয়োদশী ",
                    "শুক্ল চতুর্দশী ",
                    "পূর্ণিমা ",
                    "কৃষ্ণ প্রতিপদ ",
                    "কৃষ্ণ দ্বিতীয়া ",
                    "কৃষ্ণ তৃতীয়া ",
                    "কৃষ্ণ চতুর্থী ",
                    "কৃষ্ণ পঞ্চমী ",
                    "কৃষ্ণ ষষ্ঠী ",
                    "কৃষ্ণ সপ্তমী ",
                    "কৃষ্ণ অষ্টমী ",
                    "কৃষ্ণ নবমী ",
                    "কৃষ্ণ দশমী ",
                    "কৃষ্ণ একাদশী ",
                    "কৃষ্ণ দ্বাদশী ",
                    "কৃষ্ণ ত্রয়োদশী ",
                    "কৃষ্ণ চতুর্দশী ",
                    "অমাবশ্যা "];
var kar = [ "বব ",
                        "বালব ",
                        "কৌলব ",
                        "তৈতিল ",
                        "গর ",
                        "বণিজ ",
                        "বিষ্টি ",
                        "শকুনি ",
                        "চতুষ্পাদ ",
                        "নাগ",
                        "কিন্তুগ্ন"];
var yog = ["বিষ্কুম্ভ",
"প্রীতি",
"আয়ুষ্মান",
"সৌভাগ্য",
"শোভন",
"অতিগণ্ড",
"সুকর্মা",
"ধৃতি",
"শূল",
"গণ্ড",
"বৃদ্ধি",
"ধ্রুব",
"ব্যাঘাত",
"হর্ষণ",
"বজ্র",
"সিদ্ধি",
"ব্যতীপাত",
"বরীয়ান",
"পরিঘ",
"শিব",
"সিদ্ধ",
"সাধ্য",
"শুভ",
"শুক্র",
"ব্রহ্ম",
"ইন্দ্র",
"বৈধৃতি"];
var tipnaks = [2,5,6,0,1,4,3,2,4,5,5,0,2,1,3,6,1,4,4,5,0,3,3,3,5,0,1];
cDay=new Array("Sunday(রবিবার)","Monday(সোমবার)","Tuesday(মঙ্গলবার)","Wednesday(বুধবার)","Thursday(বৃহস্পতিবার)","Friday(শুক্রবার)","Saturday(শনিবার)");
var usingha = '<div id="Div1" class="style2"><span class="style3">সৌজন্যে: উত্তম সিংহ @ </span><a href="http://www.ponjika.com"><span class="style3">বাংলা পঞ্জিকা</span></a></div>';
var Lmoon,Lmoon1, Lsun, skar, LmoonYoga, LsunYoga;
var ayanamsa = 0;
var n_wday, n_tithi, n_naksh, n_karana, n_yoga, panch, inpdate, bangladate, banglastart, banglaend;
var s_wday, s_tithi, s_naksh, s_karana, s_yoga, s_sang;
n_naksh=1, n_tithi=1;
var bmonth, bday, byear, sangkranti;
function convert(str) {
	var mystr =str.toString();
var outj;	// javascript escaped hex
var outj1;
var be = new Array();
be['1'] = "\u09E7";
be['2'] = "\u09E8";
be['3'] = "\u09E9";
be['4'] = "\u09EA";
be['5'] = "\u09EB";
be['6'] = "\u09EC";
be['7'] = "\u09ED";
be['8'] = "\u09EE";
be['9'] = "\u09EF";
be['0'] = "\u09E6";
be[' '] = '';
be['-'] = '-';
outj1="";
for(var i=0; i<mystr.length; i++)
{	
var ch = mystr.substr(i,1);
	outj  = be[ch];
	outj1+=outj;
}
return outj1;

}	  
//-----------------------------------------------------
// Check of the entered values
//-----------------------------------------------------
function checkEntries(f){
var d = Math.floor(document.forms[0].Day.selectedIndex);
var m = Math.floor(document.forms[0].Month.selectedIndex);
var y = Math.floor(document.forms[0].Year.value);
for(i = 0; i < 7; i++){
var e = f.elements[i];
if((e.name == "Day") && (isNaN(d) || (d < 1) || (d > daysInMonth(m,y)))) {
msg = "Please enter value between 1 and " + daysInMonth(m,y) + " in the Day field";
alert(msg);
return true;
}
if(e.name == "Month")continue;
if(isNaN(e.value) || (e.value < range[i*2] ) || ( e.value > range[i*2+1])){
msg = "Please enter value between " + range[i*2] + " and " + range[i*2+1] + " in the " + e.name + " field";
alert(msg);
return true;
}
}
return false;
}
function daysInMonth(m,y) {
var g_days = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) g_days[1] = 29;
return g_days[m];
}
//--------------------------------------------------------------
// Insert of current time in the form
//--------------------------------------------------------------
function initFields()
{
var today = new Date();
document.forms[0].Year.value = today.getFullYear();
document.forms[0].Day.selectedIndex = today.getDate();
document.forms[0].Month.selectedIndex = today.getMonth();
document.forms[0].Hour.value = today.getHours();
document.forms[0].Min.value = today.getMinutes();
var zmins = today.getTimezoneOffset();
var zsign = -1;
zmins /= 60;
if(zmins < 0.0)zsign = 1;
zmins = Math.abs(zmins);
document.forms[0].ZoneHour.value = Math.floor(zmins) * zsign;
document.forms[0].ZoneMin.value = (zmins - Math.floor(zmins)) * 60;
}

//---------------------------------------------------------------------------
// Nakshatras data.
//---------------------------------------------------------------------------
function naksdata(nname)
{
this.nname = nname;

}
var naks = new Array();
var i = 0;
// name 
  naks[i++] = new naksdata("অশ্বিনী");
  naks[i++] = new naksdata("ভরণী");
  naks[i++] = new naksdata("কৃত্তিকা");
  naks[i++] = new naksdata("রোহিণী");
  naks[i++] = new naksdata("মৃগশিরা");
  naks[i++] = new naksdata("আর্দ্রা");
  naks[i++] = new naksdata("পুনর্বসু");
  naks[i++] = new naksdata("পুষ্যা");
  naks[i++] = new naksdata("অশ্লেষা");
  naks[i++] = new naksdata("মঘা");
  naks[i++] = new naksdata("পূর্বফাল্গুনী");
  naks[i++] = new naksdata("উত্তরফাল্গুনী");
  naks[i++] = new naksdata("হস্তা");
  naks[i++] = new naksdata("চিত্রা");
  naks[i++] = new naksdata("স্বাতী");
  naks[i++] = new naksdata("বিশাখা");
  naks[i++] = new naksdata("অনুরাধা");
  naks[i++] = new naksdata("জ্যেষ্ঠা");
  naks[i++] = new naksdata("মূলা");
  naks[i++] = new naksdata("পূর্বাষাঢ়া");
  naks[i++] = new naksdata("উত্তরাষাঢ়া");
  naks[i++] = new naksdata("শ্রবণা");
  naks[i++] = new naksdata("ধনিষ্ঠা");
  naks[i++] = new naksdata("শতভিষ‌া");
  naks[i++] = new naksdata("পূর্বভাদ্রপদ");
  naks[i++] = new naksdata("উত্তরভাদ্রপদ");
  naks[i++] = new naksdata("রেবতী");
//---------------------------------------------------------------------------
// Correction terms for Moon
//---------------------------------------------------------------------------
function corr(mlcor, mscor, fcor, dcor, lcor)
{
this.mlcor = mlcor;
this.mscor = mscor;
this.fcor = fcor;
this.dcor = dcor;
this.lcor = lcor;
}
function corr2(l, ml, ms, f, d)
{
this.l = l;
this.ml = ml;
this.ms = ms;
this.f = f;
this.d = d;
}
var corrMoon = new Array(); // main correction terms
i = 0;
// ml, ms, f, d, l
corrMoon[i++] = new corr( 0, 0, 0, 4, 13.902);
corrMoon[i++] = new corr( 0, 0, 0, 2, 2369.912);
corrMoon[i++] = new corr( 1, 0, 0, 4, 1.979);
corrMoon[i++] = new corr( 1, 0, 0, 2, 191.953);
corrMoon[i++] = new corr( 1, 0, 0, 0, 22639.500);
corrMoon[i++] = new corr( 1, 0, 0, -2, -4586.465);
corrMoon[i++] = new corr( 1, 0, 0, -4, -38.428);
corrMoon[i++] = new corr( 1, 0, 0, -6, -0.393);
corrMoon[i++] = new corr( 0, 1, 0, 4, -0.289);
corrMoon[i++] = new corr( 0, 1, 0, 2, -24.420);
corrMoon[i++] = new corr( 0, 1, 0, 0, -668.146);
corrMoon[i++] = new corr( 0, 1, 0, -2, -165.145);
corrMoon[i++] = new corr( 0, 1, 0, -4, -1.877);
corrMoon[i++] = new corr( 0, 0, 0, 3, 0.403);
corrMoon[i++] = new corr( 0, 0, 0, 1, -125.154);
corrMoon[i++] = new corr( 2, 0, 0, 4, 0.213);
corrMoon[i++] = new corr( 2, 0, 0, 2, 14.387);
corrMoon[i++] = new corr( 2, 0, 0, 0, 769.016);
corrMoon[i++] = new corr( 2, 0, 0, -2, -211.656);
corrMoon[i++] = new corr( 2, 0, 0, -4, -30.773);
corrMoon[i++] = new corr( 2, 0, 0, -6, -0.570);
corrMoon[i++] = new corr( 1, 1, 0, 2, -2.921);
corrMoon[i++] = new corr( 1, 1, 0, 0, -109.673);
corrMoon[i++] = new corr( 1, 1, 0, -2, -205.962);
corrMoon[i++] = new corr( 1, 1, 0, -4, -4.391);
corrMoon[i++] = new corr( 1, -1, 0, 4, 0.283);
corrMoon[i++] = new corr( 1, -1, 0, 2, 14.577);
corrMoon[i++] = new corr( 1, -1, 0, 0, 147.687);
corrMoon[i++] = new corr( 1, -1, 0, -2, 28.475);
corrMoon[i++] = new corr( 1, -1, 0, -4, 0.636);
corrMoon[i++] = new corr( 0, 2, 0, 2, -0.189);
corrMoon[i++] = new corr( 0, 2, 0, 0, -7.486);
corrMoon[i++] = new corr( 0, 2, 0, -2, -8.096);
corrMoon[i++] = new corr( 0, 0, 2, 2, -5.741);
corrMoon[i++] = new corr( 0, 0, 2, 0, -411.608);
corrMoon[i++] = new corr( 0, 0, 2, -2, -55.173);
corrMoon[i++] = new corr( 0, 0, 2, -4, 0.025);
corrMoon[i++] = new corr( 1, 0, 0, 1, -8.466);
corrMoon[i++] = new corr( 1, 0, 0, -1, 18.609);
corrMoon[i++] = new corr( 1, 0, 0, -3, 3.215);
corrMoon[i++] = new corr( 0, 1, 0, 1, 18.023);
corrMoon[i++] = new corr( 0, 1, 0, -1, 0.560);
corrMoon[i++] = new corr( 3, 0, 0, 2, 1.060);
corrMoon[i++] = new corr( 3, 0, 0, 0, 36.124);
corrMoon[i++] = new corr( 3, 0, 0, -2, -13.193);
corrMoon[i++] = new corr( 3, 0, 0, -4, -1.187);
corrMoon[i++] = new corr( 3, 0, 0, -6, -0.293);
corrMoon[i++] = new corr( 2, 1, 0, 2, -0.290);
corrMoon[i++] = new corr( 2, 1, 0, 0, -7.649);
corrMoon[i++] = new corr( 2, 1, 0, -2, -8.627);
corrMoon[i++] = new corr( 2, 1, 0, -4, -2.740);
corrMoon[i++] = new corr( 2, -1, 0, 2, 1.181);
corrMoon[i++] = new corr( 2, -1, 0, 0, 9.703);
corrMoon[i++] = new corr( 2, -1, 0, -2, -2.494);
corrMoon[i++] = new corr( 2, -1, 0, -4, 0.360);
corrMoon[i++] = new corr( 1, 2, 0, 0, -1.167);
corrMoon[i++] = new corr( 1, 2, 0, -2, -7.412);
corrMoon[i++] = new corr( 1, 2, 0, -4, -0.311);
corrMoon[i++] = new corr( 1, -2, 0, 2, 0.757);
corrMoon[i++] = new corr( 1, -2, 0, 0, 2.580);
corrMoon[i++] = new corr( 1, -2, 0, -2, 2.533);
corrMoon[i++] = new corr( 0, 3, 0, -2, -0.344);
corrMoon[i++] = new corr( 1, 0, 2, 2, -0.992);
corrMoon[i++] = new corr( 1, 0, 2, 0, -45.099);
corrMoon[i++] = new corr( 1, 0, 2, -2, -0.179);
corrMoon[i++] = new corr( 1, 0, -2, 2, -6.382);
corrMoon[i++] = new corr( 1, 0, -2, 0, 39.528);
corrMoon[i++] = new corr( 1, 0, -2, -2, 9.366);
corrMoon[i++] = new corr( 0, 1, 2, 0, 0.415);
corrMoon[i++] = new corr( 0, 1, 2, -2, -2.152);
corrMoon[i++] = new corr( 0, 1, -2, 2, -1.440);
corrMoon[i++] = new corr( 0, 1, -2, -2, 0.384);
corrMoon[i++] = new corr( 2, 0, 0, 1, -0.586);
corrMoon[i++] = new corr( 2, 0, 0, -1, 1.750);
corrMoon[i++] = new corr( 2, 0, 0, -3, 1.225);
corrMoon[i++] = new corr( 1, 1, 0, 1, 1.267);
corrMoon[i++] = new corr( 1, -1, 0, -1, -1.089);
corrMoon[i++] = new corr( 0, 0, 2, -1, 0.584);
corrMoon[i++] = new corr( 4, 0, 0, 0, 1.938);
corrMoon[i++] = new corr( 4, 0, 0, -2, -0.952);
corrMoon[i++] = new corr( 3, 1, 0, 0, -0.551);
corrMoon[i++] = new corr( 3, 1, 0, -2, -0.482);
corrMoon[i++] = new corr( 3, -1, 0, 0, 0.681);
corrMoon[i++] = new corr( 2, 0, 2, 0, -3.996);
corrMoon[i++] = new corr( 2, 0, 2, -2, 0.557);
corrMoon[i++] = new corr( 2, 0, -2, 2, -0.459);
corrMoon[i++] = new corr( 2, 0, -2, 0, -1.298);
corrMoon[i++] = new corr( 2, 0, -2, -2, 0.538);
corrMoon[i++] = new corr( 1, 1, -2, -2, 0.426);
corrMoon[i++] = new corr( 1, -1, 2, 0, -0.304);
corrMoon[i++] = new corr( 1, -1, -2, 2, -0.372);
corrMoon[i++] = new corr( 0, 0, 4, 0, 0.418);
corrMoon[i++] = new corr( 2, -1, 0, -1, -0.352);
var corrMoon2 = new Array(); // moon additional correction terms
i = 0;
// l, ml, ms, f, d
corrMoon2[i++] = new corr2( 0.127, 0, 0, 0, 6);
corrMoon2[i++] = new corr2(-0.151, 0, 2, 0, -4);
corrMoon2[i++] = new corr2(-0.085, 0, 0, 2, 4);
corrMoon2[i++] = new corr2( 0.150, 0, 1, 0, 3);
corrMoon2[i++] = new corr2(-0.091, 2, 1, 0, -6);
corrMoon2[i++] = new corr2(-0.103, 0, 3, 0, 0);
corrMoon2[i++] = new corr2(-0.301, 1, 0, 2, -4);
corrMoon2[i++] = new corr2( 0.202, 1, 0, -2, -4);
corrMoon2[i++] = new corr2( 0.137, 1, 1, 0, -1);
corrMoon2[i++] = new corr2( 0.233, 1, 1, 0, -3);
corrMoon2[i++] = new corr2(-0.122, 1, -1, 0, 1);
corrMoon2[i++] = new corr2(-0.276, 1, -1, 0, -3);
corrMoon2[i++] = new corr2( 0.255, 0, 0, 2, 1);
corrMoon2[i++] = new corr2( 0.254, 0, 0, 2, -3);
corrMoon2[i++] = new corr2(-0.100, 3, 1, 0, -4);
corrMoon2[i++] = new corr2(-0.183, 3, -1, 0, -2);
corrMoon2[i++] = new corr2(-0.297, 2, 2, 0, -2);
corrMoon2[i++] = new corr2(-0.161, 2, 2, 0, -4);
corrMoon2[i++] = new corr2( 0.197, 2, -2, 0, 0);
corrMoon2[i++] = new corr2( 0.254, 2, -2, 0, -2);
corrMoon2[i++] = new corr2(-0.250, 1, 3, 0, -2);
corrMoon2[i++] = new corr2(-0.123, 2, 0, 2, 2);
corrMoon2[i++] = new corr2( 0.173, 2, 0, -2, -4);
corrMoon2[i++] = new corr2( 0.263, 1, 1, 2, 0);
corrMoon2[i++] = new corr2( 0.130, 3, 0, 0, -1);
corrMoon2[i++] = new corr2( 0.113, 5, 0, 0, 0);
corrMoon2[i++] = new corr2( 0.092, 3, 0, 2, -2);
//-----------------------------------------------------
// Main calculation
//-----------------------------------------------------
function calculate()
{
if(checkEntries(document.forms[0]))return;
with(Math){
var day = floor(document.forms[0].Day.selectedIndex);
var mon = floor(document.forms[0].Month.selectedIndex) +1;
var year = floor(document.forms[0].Year.value);
var hr = floor(document.forms[0].Hour.value);
hr += floor(document.forms[0].Min.value)/60;
var tzone = abs(floor(document.forms[0].ZoneHour.value));
tzone += floor(document.forms[0].ZoneMin.value)/60;
}
inpmin = Math.floor(document.forms[0].Min.value);
if (inpmin < 10)inpmin = "0" + inpmin;
inpdate = convert(day) + ' ' + month[mon-1] + ' ' + convert(year) + ' তারিখ <font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((Math.floor(document.forms[0].Hour.value))) + ':' + convert(inpmin) + ' টার জন্য</b></font>'
var kday,kmon,kyear,khr,kmin,ksek;
if(Math.floor(document.forms[0].ZoneHour.value)<0.0) tzone *= -1;
// Julian date on Local Time LT:
dayhr = day + hr/24;
jdlt = mdy2julian(mon,dayhr,year);
// Weekday:
n_wday = weekDay(jdlt);
s_wday = wd.substr(n_wday*11,11);
// Julian day by the beginning of day:
jd0 = mdy2julian(mon,day,year);
//jd0 = Math.floor(jdlt) + 0.5;
//if (jdlt < jd0)jd0 -= 1;
// Julian date on Universal Time UT:
jdut = jd0 + (hr - tzone)/24;
// Ephemeris correction:
dt = dTime(jdut);
// Julian date on Ephemeris Time ET:
jd = jdut + dt/24;
// Julian date by the beginning of day:
//jd0 = Math.floor(jd) + 0.5;
//if (jd < jd0)jd0 -= 1;
// Time in Julian centuries from epoch 1900:
//t = (jd - 2415020)/36525;
// Time in Julian centuries from epoch 2000:
//t = (jd - 2451545)/36525;
// Ayanamsa:
ayanamsa = calcayan(jd);
// Ecliptic longitude of Moon:
Lmoon = moon(jd);
// Ecliptic longitude of Moon:
Lmoon1 = moon(jd);
// Ecliptic longitude of Sun:
Lsun = sun(jd);
// Yoga:
dmoonYoga = (LmoonYoga + ayanamsa - 491143.07698973856);
dsunYoga = (LsunYoga + ayanamsa - 36976.91240579201);
zyoga = dmoonYoga + dsunYoga;
n_yoga = zyoga*6/80;
while(n_yoga < 0)n_yoga += 27;
while(n_yoga > 27)n_yoga -= 27;
n3=n_yoga;
n_yoga = Math.floor(n_yoga);
s_yoga = yoga(jd, zyoga, tzone);
// Nakshatra:
Lmoon0 = fix360(Lmoon + ayanamsa);
n_naksh = Math.floor(Lmoon0*6/80);
s_naksh = nakshatra(jd, n_naksh, tzone);
// Tithi:
Lmoon0 = Lmoon;
Lsun0 = Lsun;
if (Lmoon0 < Lsun0)Lmoon0 += 360;
n_tithi = Math.floor((Lmoon0 - Lsun0)/12);
s_tithi = tithi(jd, n_tithi, tzone, 12);
// Karana:
Lmoon0 = Lmoon;
Lsun0 = Lsun;
if (Lmoon0 < Lsun0)Lmoon0 += 360;
nk = Math.floor((Lmoon0 - Lsun0)/6);
if (nk == 0)n_karana = 10;
if (nk >= 57)n_karana = nk - 50;
if (nk > 0 && nk < 57)n_karana = (nk - 1) - (Math.floor((nk - 1)/7))*7;
s_karana = tithi(jd, nk, tzone, 6);
var bjdut = jd0 + (6 - 6)/24;
// Ephemeris correction:
var bdt = dTime(bjdut);
// Julian date on Ephemeris Time ET:
var bjd = bjdut + 6/24;
s_sang = PoilaMas1(jd);
sangkranti = Sangkranti(bjd);
bday = BanglaMas(bjd);
if (usingha.length == 0) 
{ 
resultus();
}
else
{
results();
}
}
//-----------------------------------------------------
// Nutation
//-----------------------------------------------------
function nutation(jd)
{
t = (jd - 2415020)/36525;
t2 =t*t;
ls = 279.6967 + 36000.7689*t + 0.000303*t2;
l = 270.4341639 + 481267.8831417*t - 0.0011333333*t2;
ms = 358.4758333333334 + 35999.04974999958*t - t2*1.500000059604645e-4;
ml = 296.1046083333757 + 477198.8491083336*t + 0.0091916667090522*t2;
d = 350.7374861110581 + 445267.1142166667*t - t2*1.436111132303874e-3;
om = 259.1832750002543 - 1934.142008333206*t + .0020777778*t2;
ls *= d2r; l *= d2r; ms *= d2r; ml *= d2r; d *= d2r; om *= d2r;
d2 =d*d; l2 = l*l; ls2 = ls*ls;
with(Math){
nut = (-17.2327 - 0.01737 * t) * sin(om);
nut += 0.2088 * sin(2.0 * om);
nut += 0.0675 * sin(ml);
nut -= 0.0149 * sin(ml - d2);
nut -= 0.0342 * sin(l2 - om);
nut += 0.0114 * sin(l2 - ml);
nut -= 0.2037 * sin(l2);
nut -= 0.0261 * sin(l2 + ml);
nut += 0.0124 * sin(ls2 - om);
nut += 0.0214 * sin(ls2 - ms);
nut -= 1.2729 * sin(ls2);
nut -= 0.0497 * sin(ls2 + ms);
nut += 0.1261 * sin(ms);
nut = nut/3600.0;
}
return nut;
}
//-----------------------------------------------------
// Ayanamsa (deg.)
//-----------------------------------------------------
function calcayan(jd)
{
t = (jd - 2415020)/36525;
om = 259.183275 - 1934.142008333206 * t + 0.0020777778 * t * t + 0.0000022222222 * t * t * t;
ls = 279.696678 + 36000.76892 * t + 0.0003025 * t * t;
aya = 17.23 * Math.sin(d2r * om) + 1.27 * Math.sin(d2r * ls * 2) - (5025.64 + 1.11 * t) * t;
aya = (aya - 80861.27)/3600.0; // 84038.27 = Fagan-Bradley, 80861.27 = Lahiri
return aya;
}
//------------------------------------------------------------------------------------------
// Julian day from calendar day
//------------------------------------------------------------------------------------------
function mdy2julian(m,d,y){
with(Math){
im = 12 * (y + 4800) + m - 3;
j = (2 * (im - floor(im/12) * 12) + 7 + 365 * im)/12;
j = floor(j) + d + floor(im/48) - 32083;
if(j > 2299171)j += floor(im/4800) - floor(im/1200) + 38;
j -=0.5;
}
return j;
}
//-----------------------------------------------------------------------------------------
// Returns delta t (in julian days) from universal time (h.)
//-----------------------------------------------------------------------------------------
function dTime(jd)
{
// delta t from 1620 to 2010 (sec.):
var efdt = [124,85,62,48,37,26,16,10,9,10,11,11,12,13,15,16,17,17,13.7,12.5,12,7.5,5.7,7.1,7.9,1.6,-5.4,-5.9,-2.7,10.5,21.2,24,24.3,29.2,33.2,40.2,50.5,56.9,65.7,75.5];
s = calData(jd);
dgod = kyear + (kmon - 1)/12 + (kday - 1)/365.25;
t = (jd - 2378497)/36525;
if (dgod >= 1620 && dgod < 2010) {
i1 = Math.floor((dgod - 1620)/10);
di = dgod - (1620 + i1*10);
dt = (efdt[i1] + ((efdt[i1 + 1] - efdt[i1])*di)/10);
}
else {
if (dgod >= 2010) dt = 25.5 * t * t - 39;
if (dgod >= 948 && dgod < 1620) dt = 25.5 * t * t;
if (dgod < 948) dt = 1361.7 + 320 * t + 44.3 * t * t;
}
dt /= 3600;
return dt;
}
//------------------------------------------------------------------------------------------
// Calendar day from Julian Day
//------------------------------------------------------------------------------------------
function calData(jd)
{
with(Math){
z1 = jd + 0.5;
z2 = floor(z1);
f = z1 - z2;
if(z2 < 2299161)a = z2;
else {
alf = floor((z2 - 1867216.25)/36524.25);
a = z2 + 1 + alf - floor(alf/4);
}
b = a + 1524;
c = floor((b - 122.1)/365.25);
d = floor(365.25*c);
e = floor((b - d)/30.6001);
days = b - d - floor(30.6001*e) + f;
kday = floor(days);
if(e < 13.5)kmon = e - 1;
else kmon = e - 13;
if(kmon > 2.5)kyear = c - 4716;
if(kmon < 2.5)kyear = c - 4715;
hh1 = (days - kday)*24;
khr = floor(hh1);
kmin = hh1 - khr;
ksek = kmin*60;
kmin = floor(ksek);
ksek = floor((ksek - kmin)*60);
if (kday < 10)kday = " " + kday;
if (khr < 10)khr = "0" + khr;
if (kmin < 10)kmin = "0" + kmin;
if (ksek < 10)ksek = "0" + ksek;
s = convert(kday) + " " + month[kmon-1] + " " + convert(kyear) + " " + convert(khr) + ":" + convert(kmin) + "টা";
}
return s;
}


//------------------------------------------------------------------------------------------
// Translation degrees of a longitude in degrees, minutes, seconds of the zodiac sign
//------------------------------------------------------------------------------------------
function lon2dmsz(x)
{
with(Math){
var d,m,s;
x = abs(x);
z = floor(x / 30);
d = floor(x);
ss0 = round((x - d) * 3600);
m = floor(ss0 / 60);
s = (ss0 % 60) % 60;
d %= 30;
str = convert(d) + "&#186;" + convert(m) + "'" + convert(s) + "\" " + zn[z];
}
return str;
}
//------------------------------------------------------------------------------------------
// Translation degrees of a longitude in degrees, minutes, seconds of the zodiac sign
//------------------------------------------------------------------------------------------
function lon2dmsz1(x)
{
with(Math){
var d,m,s;
x = abs(x);
z1 = floor(x / 30);
d = floor(x);
ss0 = round((x - d) * 3600);
m = floor(ss0 / 60);
s = (ss0 % 60) % 60;
d %= 30;
str = zn1[z];
}
return str;
}
//------------------------------------------------------------------------------------------
// Translation degrees in degrees, minutes, seconds
//------------------------------------------------------------------------------------------
function lon2dms(x)
{
with(Math){
var d,m,s;
x = abs(x);
d = floor(x);
ss0 = round((x - d) * 3600);
m = floor(ss0 / 60);
s = (ss0 % 60) % 60;
str = convert(d) + "&#186;" + convert(m) + "'" + convert(s) + "\"";
}
return str;
}
//------------------------------------------------------------------------------------------
// Saving in limits of 360 degrees
//------------------------------------------------------------------------------------------
function fix360(v)
{
while(v < 0.0)v += 360.0;
while(v > 360.0)v -= 360.0;
return v;
}
//------------------------------------------------------------------------------------------
// Day of week
//------------------------------------------------------------------------------------------
function weekDay(jd)
{
jd0 = Math.floor(jd) + 0.5;
if (jd < jd0)jd0 -= 1;
jdn = jd0 + 1.5;
dn1 = Math.floor(jdn/7)*7;
wday = Math.floor(jdn - dn1);
return wday;
}
//-----------------------------------------------------------------------------------
// Calculation Geocentric ecliptic longitude of Moon and angular speed.
// (accuracy 2 sec. of long.)
//-----------------------------------------------------------------------------------
function moon(jd)
{
// Days from epoch 1900:
tdays = jd - 2415020;
// Time in Julian centuries from epoch 1900:
t = tdays/36525;
t2 =t*t;
t3 = t*t*t;
// inclination of an ecliptic to equator:
ob = 23.452294 - 0.0130125 * t - 0.00000164*t2 + 0.000000503*t3;
// moon's mean longitude:
//l = 270.4341639 + 481267.8831417*t - 0.0011333333*t2 + 0.0000018888889*t3;
l = 270.4337361 + 13.176396544528099*tdays - 5.86*t2/3600 + 0.0068*t3/3600;
// elongation of moon from sun:
d = 350.7374861110581 + 445267.1142166667*t - t2*1.436111132303874e-3 + 0.0000018888889*t3;
// moon's perihel:
pe = 334.329556 + 14648522.52*t/3600 - 37.17*t2/3600 - 0.045*t3/3600;
// sun's mean anomaly:
ms = 358.4758333333334 + 35999.04974999958*t - t2*1.500000059604645e-4 - t3*3.3333333623078e-6;
// moon's mean anomaly:
//ml = 296.1046083333757 + 477198.8491083336*t + 0.0091916667090522*t2 + 0.0000143888893*t3;
ml = fix360(l - pe);
// moon's mean node:
om = 259.183275 - 6962911.23*t/3600 + 7.48*t2/3600 + 0.008*t3/3600;
// moon's mean longitude, counted from node:
//f = 11.25088888890213 + 483202.0251500002*t - t2*3.211111227671305e-3 - .00000033*t3;
f = fix360(l - om);
with(Math){
// The periodic corrections:
r2rad = 360.0 * d2r;
tb = tdays * 1e-12; // *10^12
t2c = tdays * tdays * 1e-16; // *10^16
a1 = sin(r2rad * (0.53733431 - 10104982 * tb + 191 * t2c));
a2 = sin(r2rad * (0.71995354 - 147094228 * tb + 43 * t2c));
c2 = cos(r2rad * (0.71995354 - 147094228 * tb + 43 * t2c));
a3 = sin(r2rad * (0.14222222 + 1536238 * tb));
a4 = sin(r2rad * (0.48398132 - 147269147 * tb + 43 * t2c));
c4 = cos(r2rad * (0.48398132 - 147269147 * tb + 43 * t2c));
a5 = sin(r2rad * (0.52453688 - 147162675 * tb + 43 * t2c));
a6 = sin(r2rad * (0.84536324 - 11459387 * tb));
a7 = sin(r2rad * (0.23363774 + 1232723 * tb + 191 * t2c));
a8 = sin(r2rad * (0.58750000 + 9050118 * tb));
a9 = sin(r2rad * (0.61043085 - 67718733 * tb));
dlm = 0.84 * a3 + 0.31 * a7 + 14.27 * a1 + 7.261 * a2 + 0.282 * a4 + 0.237 * a6;
dpm = -2.1 * a3 - 2.076 * a2 - 0.840 * a4 - 0.593 * a6;
dkm = 0.63 * a3 + 95.96 * a2 + 15.58 * a4 + 1.86 * a5;
dls = -6.4 * a3 - 0.27 * a8 - 1.89 * a6 + 0.20 * a9;
dgc = (-4.318 * c2 - 0.698 * c4) / 3600.0 / 360.0;
dgc = (1.000002708 + 139.978 * dgc);
ml = d2r * (ml + (dlm - dpm) / 3600.0); //moon's mean anomaly
ms = d2r * (ms + dls / 3600.0); //sun's mean anomaly
f = d2r * (f + (dlm - dkm) / 3600.0); //moon's mean longitude, counted from node
d = d2r * (d + (dlm - dls) / 3600.0); //elongation of moon from sun
lk = 0; lk1 = 0; sk = 0; sinp = 0; nib = 0; g1c = 0;
i1corr = 1.0 - 6.8320e-8 * tdays;
i2corr = dgc * dgc;
for (i = 0; i < 93; i++) { // indignation in a longitude
arg = corrMoon[i].mlcor * ml + corrMoon[i].mscor * ms + corrMoon[i].fcor * f + corrMoon[i].dcor * d;
sinarg = sin(arg);
if (corrMoon[i].mscor != 0) {
sinarg *= i1corr;
if (corrMoon[i].mscor == 2 || corrMoon[i].mscor == -2)sinarg *= i1corr;
}
if (corrMoon[i].fcor != 0)sinarg *= i2corr;
lk += corrMoon[i].lcor * sinarg;
}
for (i = 0; i < 27; i++) { // indignation in a longitude additional
arg = corrMoon2[i].ml * ml + corrMoon2[i].ms * ms + corrMoon2[i].f * f + corrMoon2[i].d * d;
sinarg = sin(arg);
lk1 += corrMoon2[i].l * sinarg;
}
// Indignation from planets:
dlid = 0.822 * sin(r2rad * (0.32480 - 0.0017125594 * tdays));
dlid += 0.307 * sin(r2rad * (0.14905 - 0.0034251187 * tdays));
dlid += 0.348 * sin(r2rad * (0.68266 - 0.0006873156 * tdays));
dlid += 0.662 * sin(r2rad * (0.65162 + 0.0365724168 * tdays));
dlid += 0.643 * sin(r2rad * (0.88098 - 0.0025069941 * tdays));
dlid += 1.137 * sin(r2rad * (0.85823 + 0.0364487270 * tdays));
dlid += 0.436 * sin(r2rad * (0.71892 + 0.0362179180 * tdays));
dlid += 0.327 * sin(r2rad * (0.97639 + 0.0001734910 * tdays));
l = l + nutation(jd) + (dlm + lk + lk1 + dlid) / 3600.0;
LmoonYoga = l;
//alert("Lmoon="+l);
l = fix360(l);
// Moon's angular speed (deg/day):
vl = 13.176397;
vl = vl + 1.434006*cos(ml);
vl = vl + .280135*cos(2*d);
vl = vl + .251632*cos(2*d - ml);
vl = vl + .09742*cos(2*ml);
vl = vl - .052799*cos(2*f);
vl = vl + .034848*cos(2*d + ml);
vl = vl + .018732*cos(2*d - ms);
vl = vl + .010316*cos(2*d - ms - ml);
vl = vl + .008649*cos(ms - ml);
vl = vl - .008642*cos(2*f + ml);
vl = vl - .007471*cos(ms + ml);
vl = vl - .007387*cos(d);
vl = vl + .006864*cos(3*ml);
vl = vl + .00665*cos(4*d - ml);
vl = vl + .003523*cos(2*d + 2*ml);
vl = vl + .003377*cos(4*d - 2*ml);
vl = vl + .003287*cos(4*d);
vl = vl - .003193*cos(ms);
vl = vl - .003003*cos(2*d + ms);
vl = vl + .002577*cos(ml - ms + 2*d);
vl = vl - .002567*cos(2*f - ml);
vl = vl - .001794*cos(2*d - 2*ml);
vl = vl - .001716*cos(ml - 2*f - 2*d);
vl = vl - .001698*cos(2*d + ms - ml);
vl = vl - .001415*cos(2*d + 2*f);
vl = vl + .001183*cos(2*ml - ms);
vl = vl + .00115*cos(d + ms);
vl = vl - .001035*cos(d + ml);
vl = vl - .001019*cos(2*f + 2*ml);
vl = vl - .001006*cos(ms + 2*ml);
}
skar = vl;
//l += ay;
//if(l < 0.0)l += 360.0;
return l;
}
//----------------------------------------------------------------------
// Calculation Geocentric ecliptic longitude of Sun
// (accuracy 1 sec. of long.)
//----------------------------------------------------------------------
function sun(jd)
{
// Days from epoch 1900:
tdays = jd - 2415020;
// Time in Julian centuries from epoch 1900:
t = tdays/36525;
t2 =t*t;
t3 = t*t*t;
// sun's mean longitude:
//ls = 279.696678 + 36000.76892*t + 0.0003025*t2;
ls = 279.696678 + 0.9856473354*tdays + 1.089*t2/3600;
// sun's perihel:
pes = 101.220833 + 6189.03*t/3600 + 1.63*t2/3600 + 0.012*t3/3600;
// sun's mean anomaly:
//ms = 358.4758333333334 + 35999.04974999958*t - t2*1.500000059604645e-4 - t3*3.3333333623078e-6;
ms = fix360(ls - pes + 180);
// longperiodic terms:
//g = ms + 0.0017778 * Math.sin((231.19 + 20.2*t)*d2r) + 0.00052278 * Math.sin((57.24 + 150.27*t)*d2r);
g = ms + (0.266 * Math.sin((31.8 + 119.0*t)*d2r) + 6.40 * Math.sin((231.19 + 20.2*t)*d2r) + (1.882-0.016*t) * Math.sin((57.24 + 150.27*t)*d2r)) / 3600.0;
// sun's mean longitude:
oms = 259.18 - 1934.142*t;
// excentricity of earth orbit:
ex = 0.01675104 - 0.0000418*t - 0.000000126*t2;
// moon's mean longitude:
l = 270.4337361 + 13.176396544528099*tdays - 5.86*t2/3600 + 0.0068*t3/3600;
// moon's mean anomaly:
ml = 296.1046083333757 + 477198.8491083336*t + 0.0091916667090522*t2 + 0.0000143888893*t3;
// mean longitude of earth:
le = 99.696678 + 0.9856473354*tdays + 1.089*t2/3600;
// moon's mean node longitude:
om = 259.183275 - 6962911.23*t/3600 + 7.48*t2/3600 + 0.008*t3/3600;
// the Kepler equation:
u = kepler(g, ex, 0.0000003)
with(Math){
// sun's true anomaly:
b = sqrt((1 + ex) / (1 - ex));
if (abs(Math.PI - u) < 1.0e-10) truanom = u;
else truanom = 2.0 * atan(b * tan(u / 2));
truanom = fix360(truanom * r2d);
u1 = (153.23 + 22518.7541 * t) * d2r;
u2 = (216.57 + 45037.5082 * t) * d2r;
u3 = (312.69 + 32964.3577 * t) * d2r;
u4 = (350.74 + 445267.1142 * t - 0.00144 * t2) * d2r;
u6 = (353.4 + 65928.71550000001 * t) * d2r;
u5 = (315.6 + 893.3 * t) * d2r;
dl = 0.00134 * cos(u1);
dl += 0.00154 * cos(u2);
dl += 0.002 * cos(u3);
dl += 0.00179 * sin(u4);
dl += 0.202 * sin(u5)/3600;
dr = 0.00000543 * sin(u1);
dr += 0.00001575 * sin(u2);
dr += 0.00001627 * sin(u3);
dr += 0.00003076 * cos(u4);
dr += 9.26999999e-06 * sin(u6);
// sun's true longitude (deg.):
il = ls + dl + truanom - ms;
// aberracion (deg):
r1 = 1.0000002 * (1 - ex * ex) / (1 + ex * cos(truanom*d2r));
rs = r1 + dr; // radius-vector
ab = (20.496 * (1 - ex * ex) / rs) / 3600;
ls = il + nutation(jd) - ab; // visible longitude of sun
LsunYoga = ls;
//alert("Lsun="+ls);
ls = fix360(ls);
}
return ls;
}
//----------------------------------------------------------------------------
// Beginning/end tithi and karana.
//----------------------------------------------------------------------------
function tithi(jd, n1, tzone, len)
{
var s_t = "";
var flag;
jdt = jd;
knv = Math.floor(((jd - 2415020) / 365.25) * 12.3685);
for (itit = n1; itit < (n1 + 2); ++itit) {
aspect = len * itit;
flag = 0;
if (aspect == 0) {jdt = novolun(jd, knv); flag = 1;}
if (aspect == 360) {jdt = novolun(jd, (knv+1)); flag = 1;}
while (flag < 1) {
Lsun0 = sun(jdt);
Lmoon0 = moon(jdt);
a = fix360(Lsun0 + aspect);
asp1 = a - Lmoon0;
if (asp1 > 180) asp1 -= 360;
if (asp1 < -180) asp1 += 360;
flag = 1;
//if (Math.abs(asp1) > 0.001) {jdt += (asp1 / 12.190749); flag = 0;}
if (Math.abs(asp1) > 0.001) {jdt += (asp1 / (skar - 1)); flag = 0;}
}
if (itit == n1) s_t = calData(jdt + tzone/24) + "&nbsp;&nbsp;হইতে";
if (itit == (n1 + 1)) s_t += "&nbsp;" + calData(jdt + tzone/24);
}
return s_t;
}
//----------------------------------------------------------------------------
// Entrance and exit of the Moon in nakshatra.
//----------------------------------------------------------------------------
function nakshatra(jd, n_naksh, tzone)
{
var s_t = "";
var flag;
jdt = jd;
for (inak = n_naksh; inak < (n_naksh + 2); ++inak) {
n1 = fix360(inak*80/6);
flag = 0;
while (flag < 1) {
Lmoon0 = fix360(moon(jdt) + ayanamsa);
asp1 = n1 - Lmoon0;
if (asp1 > 180) asp1 -= 360;
if (asp1 < -180) asp1 += 360;
flag = 1;
if (Math.abs(asp1) > 0.001) {jdt += (asp1 / skar); flag = 0;}
}
if (inak == n_naksh) s_t = calData(jdt + tzone/24) + "&nbsp;&nbsp;হইতে";
if (inak == (n_naksh + 1)) s_t += "&nbsp;" + calData(jdt + tzone/24);
}
return s_t;
}

///////////////////////////////



//----------------------------------------------------------------------------
// SunData.
//----------------------------------------------------------------------------
function Sangkranti(jd)
{
var s_t = "";
var flag;
jdt = jd;
Lsun1 = sun(jd);
ayanamsa1 = calcayan(jd);
var zs = Math.floor(fix360(Lsun1 + ayanamsa1)/30)+1;
tzone=6;
zs -=1;
for (izs = zs; izs < (zs + 2); ++izs) {
n1 = izs*30;
flag = 0;
while (flag < 1) {
Lsun10 = fix360(sun(jdt) + ayanamsa1);
asp1 = n1 - Lsun10;
if (asp1 > 180) asp1 -= 360;
if (asp1 < -180) asp1 += 360;
flag = 1;
if (Math.abs(asp1) > 0.001) {jdt += (asp1 / skar); flag = 0;}
}
if (izs == zs) 
{
s_t = calData(jdt + tzone/24);

}
//if (izs == (zs + 1)) 
//{
//s_t += "&nbsp;" + calData(jdt + tzone/24);
//}
}
return s_t;
}

//----------------------------------------------------------------------------
// SunData.
//----------------------------------------------------------------------------
function PoilaMas(jd)
{
var s_t = "";
var flag;
jdt = jd;
var bLsun = sun(jdt);
var bayanamsa = calcayan(jdt);
var zs = Math.floor(fix360(bLsun + bayanamsa)/30)+1;
var bLsun0;
tzone=6;
zs -=1;
for (izs = zs; izs < (zs + 2); ++izs) {
n1 = izs*30;
flag = 0;
while (flag < 1) {
bLsun0 = fix360(sun(jdt) + bayanamsa);
asp1 = n1 - bLsun0;
if (asp1 > 180) asp1 -= 360;
if (asp1 < -180) asp1 += 360;
flag = 1;
if (Math.abs(asp1) > 0.001) {jdt += (asp1 / skar); flag = 0;}
}
if (izs == zs) 
{

var greg = jd_to_gregorian(jdt + tzone/24);
//var td = jd_to_gregorian(jd);
var date1 = new Date(greg[0],greg[1]-1,greg[2]);
//var date2Day = new Date(td[0],td[1]-1,td[2]);
var st =mdy2julian(date1.getMonth()+1,date1.getDate()+1.25, date1.getFullYear());
//var tod = mdy2julian(date2Day.getMonth()+1,date2Day.getDate(),date2Day.getFullYear());
//var tod1 = mdy2julian(date2Day.getMonth()+1,date2Day.getDate()+1.25,date2Day.getFullYear());
//if (tod ==st)tod = tod1;
//banglastart = tod - st;

}

}
return st;
}
function PoilaMas1(jd)
{
var San = 594 - 1;
var greg = jd_to_gregorian(jd + 6/24);
var date1 = new Date(greg[0],greg[1]-1,greg[2]);
var cyear = date1.getFullYear();
var pb =mdy2julian(4,20,date1.getFullYear())+0.25;
var pm = PoilaMas(pb);
if (Math.floor(pm) >= Math.floor(jd))
{
cyear -=1;
}
byear = cyear - San;
var st;
var array = [];
//array.push(byear);
var i=4;
for (i=4;i<=12;i++)
{
st =mdy2julian(i,20,cyear)+0.25;
array.push(beng_month_name[i-3] + " মাস শুরুঃ  " + jd_to_CalDate(PoilaMas(st)));
}
var st1 =mdy2julian(1,20,cyear+1)+0.25;
array.push(beng_month_name[10] + " মাস শুরুঃ  " +jd_to_CalDate(PoilaMas(st1)));
var st2 =mdy2julian(2,20,cyear+1)+0.25;
array.push(beng_month_name[11] + " মাস শুরুঃ  " +jd_to_CalDate(PoilaMas(st2)));
var st3 =mdy2julian(3,20,cyear+1)+0.25;
array.push(beng_month_name[12] + " মাস শুরুঃ  " +jd_to_CalDate(PoilaMas(st3)));
//array.push(byear+1);
var str1= array.join(" ");
return str1;

}
function BanglaMas(jd)
{
var San = 594 - 1;
var greg = jd_to_gregorian(jd + 6/24);
var date1 = new Date(greg[0],greg[1]-1,greg[2]);
var cyear = date1.getFullYear();
var pb =mdy2julian(4,20,date1.getFullYear())+0.25;
var pm = PoilaMas(pb);
if (Math.floor(pm) > Math.floor(jd))
{
cyear -=1;
}
byear = cyear - San;
var greg2 = jd_to_gregorian(jd-1 + 6/24);
var date2 = new Date(greg2[0],greg2[1]-1,greg2[2]);
var cm2 =mdy2julian(date2.getMonth()+1, date2.getDate(),date2.getFullYear())+0.25;
var tm2 = PoilaMas(cm2);
var cm1 =mdy2julian(date1.getMonth()+1, date1.getDate(),date1.getFullYear())+0.25;
var tm1 = PoilaMas(cm1);
var st=Math.floor(jd) - Math.floor(tm1)+1;
var bLsun = sun(jd);
var bayanamsa = calcayan(jd);
var bmon = Math.floor(fix360(bLsun + bayanamsa)/30)+1;
if (Math.floor(tm1) > Math.floor(jd))
{
st = Math.floor(jd) - Math.floor(tm2)+1;
bmon -=1;
}
return convert(st) + " " + beng_month_name[bmon] + "  " + convert(byear) + " বঙ্গাব্দ";

}


function days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)
    
    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)

}




function jd_to_gregorian(jd) {
//var jd = parseFloat(jd2cdform.jd.value)

   var jd0 = jd + 0.5
  
   var z = Math.floor(jd0)
   var f = jd0 - z

   var a = 0.0
   var alp = 0.0
   if ( z < 2299161 ) {
     a = z
   } else {
     alp = Math.floor((z - 1867216.25)/36524.25)
     a = z + 1.0 + alp - Math.floor(alp/4.0)
   }

   var b = a + 1524
   var c = Math.floor((b - 122.1)/365.25)
   var d = Math.floor(365.25*c)
   var e = Math.floor((b - d)/30.6001)

   var dayt = b - d - Math.floor(30.6001*e) + f

   var mon = 0
   if (e < 13.5) {
      mon = e - 1
   } else {
      mon = e - 13
   }

   var yr = 0
   if (mon > 2.5) {
      yr = c - 4716
   } else {
      yr = c - 4715
   }

    return new Array(yr, mon, Math.floor(dayt));
}

function jd_to_CalDate(jd) {
//var jd = parseFloat(jd2cdform.jd.value)

   var jd0 = jd + 0.5
  
   var z = Math.floor(jd0)
   var f = jd0 - z

   var a = 0.0
   var alp = 0.0
   if ( z < 2299161 ) {
     a = z
   } else {
     alp = Math.floor((z - 1867216.25)/36524.25)
     a = z + 1.0 + alp - Math.floor(alp/4.0)
   }

   var b = a + 1524
   var c = Math.floor((b - 122.1)/365.25)
   var d = Math.floor(365.25*c)
   var e = Math.floor((b - d)/30.6001)

   var dayt = b - d - Math.floor(30.6001*e) + f

   var mon = 0
   if (e < 13.5) {
      mon = e - 1
   } else {
      mon = e - 13
   }

   var yr = 0
   if (mon > 2.5) {
      yr = c - 4716
   } else {
      yr = c - 4715
   }
var st = convert(Math.floor(dayt)) + " " + month[mon-1] + " " + convert(yr) +" * <br>";
    return st;
}
//////////////////////////
//----------------------------------------------------------------------------
// Beginning and end the yoga.
//----------------------------------------------------------------------------
function yoga(jd, zyoga, tzone)
{
var s_t = "";
var flag;
jdt = jd;
z = zyoga;
var nn_yoga = new Array(2);
nn_yoga[0] = Math.floor(z * 6 / 80) * 80 / 6;
nn_yoga[1] = (Math.floor(z * 6 / 80) + 1) * 80 / 6;
//alert(zyoga+"\r"+nn_yoga[0]+"\r"+nn_yoga[1]);
for (iyog = 0; iyog < 2; ++iyog) {
flag = 0;
while (flag < 1) {
Lsun0 = sun(jdt);
Lmoon0 = moon(jdt);
dmoonYoga = (LmoonYoga + ayanamsa - 491143.07698973856);
dsunYoga = (LsunYoga + ayanamsa - 36976.91240579201);
//alert(LmoonYoga+"\r"+LsunYoga+"\r"+ayanamsa);
z = dmoonYoga + dsunYoga;
asp1 = nn_yoga[iyog] - z;
//alert(asp1+"\r"+nn_yoga[iyog]+"\r"+z);
flag = 1;
if (Math.abs(asp1) > 0.001) {jdt += (asp1 / (skar + 1.0145616633)); flag = 0;}
//if (Math.abs(asp1) > 0.001) {jdt += (asp1 / skar) + (58.13 * Math.sin(asp1*d2r)); flag = 0;}
}
if (iyog == 0) s_t = calData(jdt + tzone/24) + "&nbsp;&nbsp;হইতে";
if (iyog == 1) s_t += "&nbsp;" + calData(jdt + tzone/24);
}
return s_t;
}
//-----------------------------------------------------------------------------
// Calculation of the moment of the nearest past new moon in JD.
// (the error does not exceed 2 minutes)
//-----------------------------------------------------------------------------
function novolun (jd, knv)
{
t = (jd - 2415020) / 36525;
t2 =t*t;
t3 = t*t*t;
with(Math){
jdnv = 2415020.75933 + 29.53058868 * knv + 0.0001178 * t2 - 0.000000155 * t3;
jdnv += 0.00033 * sin((166.56 + 132.87 * t - 0.009173 * t2) * d2r);
m = 359.2242 + 29.10535608 * knv - 0.0000333 * t2 - 0.00000347 * t3;
ml = 306.0253 + 385.81691806 * knv + 0.0107306 * t2 + 0.00001236 * t3;
f = 21.2964 + 390.67050646 * knv - 0.0016528 * t2 - 0.00000239 * t3;
m *= d2r;
ml *= d2r;
f *= d2r;
djd = (0.1734 - 0.000393 * t) * sin(m);
djd += 0.0021 * sin(2 * m);
djd -= 0.4068 * sin(ml);
djd += 0.0161 * sin(2 * ml);
djd -= 0.0004 * sin(3 * ml);
djd += 0.0104 * sin(2 * f);
djd -= 0.0051 * sin(m + ml);
djd -= 0.0074 * sin(m - ml);
djd += 0.0004 * sin(2 * f + m);
djd -= 0.0004 * sin(2 * f - m);
djd -= 0.0006 * sin(2 * f + ml);
djd += 0.001 * sin(2 * f - ml);
djd += 0.0005 * sin(m + 2 * ml);
jdnv += djd;
}
return jdnv;
}
//-----------------------------------------------------
// Solution of the Kepler equation (in radians)
//-----------------------------------------------------
function kepler(m, ex, err)
{
//val u0, delta;
m *= d2r;
u0 = m;
err *= d2r;
delta = 1;
while (Math.abs(delta) >= err) {
delta = (m + ex * Math.sin(u0) - u0) / (1 - ex * Math.cos(u0));
u0 += delta;
}
return u0;
}
//------------------------------------------------------------------------------------------
// Print panchang
//------------------------------------------------------------------------------------------
function results() {
panch='<div align="center" ><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>'+ inpdate + '</b></div>';
panch += '<div align="center" ><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>'+ bday + '*</b></div>';
panch += '<div align="center" ><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>বিগত সংক্রান্তিঃ '+ sangkranti + '*</b></div>';
panch+='<table width="100%" height="100%" border="1" align="center" cellspacing="0" bordercolor="#FFCC99" title="Panchanga">';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>বার:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + cDay[n_wday] + '</b></font></td></tr>';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>তিথি:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((n_tithi + 1)) + '. ' + tith[n_tithi] + '</b></font><br><font style="COLOR:red; FONT: 8pt/11pt verdana">' + s_tithi + '</font></td>';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>নক্ষত্র:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((n_naksh + 1)) + '. ' + naks[n_naksh].nname + '</b></font><br><font style="COLOR:red; FONT: 8pt/11pt verdana">' + s_naksh + '</font></td></tr>';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>যোগ:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((n_yoga + 1)) + '. ' + yog[n_yoga] + '</b></font><br><font style="COLOR:red; FONT: 8pt/11pt verdana">' + s_yoga + '</font></td></tr>';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>কর্ন:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((n_karana + 1)) + '. ' + kar[n_karana] + '</b></font><br><font style="COLOR:red; FONT: 8pt/11pt verdana">' + s_karana + '</font></td></tr></table>';
panch+='<table width="100%" height="100%" border="1" align="center" cellspacing="0" bordercolor="#FFCC99" title="Panchanga"><tr><td align="center" height="19"style= "border:1px #FF9428 solid;"><font style="COLOR:#0300D4; FONT: 8pt/11pt verdana">জন্ম রাশি (চন্দ্র): ' + lon2dmsz(fix360(Lmoon + ayanamsa)) + '</font></td></tr><tr><td align="center" height="19"style= "border:1px #FF9428 solid;"><font style="COLOR:#0300D4; FONT: 8pt/11pt verdana">রবি: ' + lon2dmsz(fix360(Lsun + ayanamsa)) + '</font></span></td></tr>';
panch+='<tr><td align="center" height="19"style= "border:1px #FF9428 solid;"><font style="COLOR:#0300D4; FONT: 8pt/11pt verdana"> লাহিড়ি অয়নাংশ: ' + lon2dms(ayanamsa) + '</font></span></td></tr></table>';
panch += s_sang;
panch += "<hr> * তারকা চিহ্নিত বাংলা তারিখ সমুহ ও সংক্রান্তি বাংলাদেশের সময় অনুসারে,<br>অন্যন্য তারিখ ও সময় আপনার বাছাইকৃত 'Time Zone' অনুসারে। " + usingha;
document.all.onlinejyotish.innerHTML=panch;
}
function resultus() {
panch='<div align="center" ><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>'+ inpdate + '</b></div>';
panch+='<table width="100%" height="100%" border="1" align="center" cellspacing="0" bordercolor="#FFCC99" title="Panchanga">';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>বার:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + cDay[n_wday] + '</b></font></td></tr>';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>তিথি:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((n_tithi + 1)) + '. ' + tith[n_tithi] + '</b></font><br><font style="COLOR:red; FONT: 8pt/11pt verdana">' + s_tithi + '</font></td>';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>নক্ষত্র:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((n_naksh + 1)) + '. ' + naks[n_naksh].nname + '</b></font><br><font style="COLOR:red; FONT: 8pt/11pt verdana">' + s_naksh + '</font></td></tr>';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>যোগ:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((n_yoga + 1)) + '. ' + yog[n_yoga] + '</b></font><br><font style="COLOR:red; FONT: 8pt/11pt verdana">' + s_yoga + '</font></td></tr>';
panch+='<tr><td valign="middle"><p align="center"><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>কর্ন:</b></font></td><td><font style="COLOR:#7300D4; FONT: 8pt/11pt verdana"><b>' + convert((n_karana + 1)) + '. ' + kar[n_karana] + '</b></font><br><font style="COLOR:red; FONT: 8pt/11pt verdana">' + s_karana + '</font></td></tr></table>';
panch+='<table width="100%" height="100%" border="1" align="center" cellspacing="0" bordercolor="#FFCC99" title="Panchanga"><tr><td align="center" height="19"style= "border:1px #FF9428 solid;"><font style="COLOR:#0300D4; FONT: 8pt/11pt verdana">জন্ম রাশি (চন্দ্র): ' + lon2dmsz(fix360(Lmoon + ayanamsa)) + '</font></td></tr><tr><td align="center" height="19"style= "border:1px #FF9428 solid;"><font style="COLOR:#0300D4; FONT: 8pt/11pt verdana">রবি: ' + lon2dmsz(fix360(Lsun + ayanamsa)) + '</font></span></td></tr>';
panch+='<tr><td align="center" height="19"style= "border:1px #FF9428 solid;"><font style="COLOR:#0300D4; FONT: 8pt/11pt verdana"> লাহিড়ি অয়নাংশ: ' + lon2dms(ayanamsa) + '</font></span></td></tr></table>';
panch += "<hr>" + '<div id="Div1" class="style2"><span class="style3"> 2012 &copy; </span><a href="http://www.ponjika.com"><span class="style3">বাংলা পঞ্জিকা</span></a></div>';
document.all.onlinejyotish.innerHTML=panch;
}
//-->