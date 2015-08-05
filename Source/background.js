var quotes = [
"How Can Mirrors Be Real If Our Eyes Aren't Real",
'You Must Not Know Fashion',
'I Only Apply To The Sixth Amendment',
'Most Trees Are Blue',
'I Watch Twilight Every Night',
'I Will Always Give You The Truth I Will Never Lie To You In My music If You Cant Handle My Feelings And Emotions Please Unfollow Me',
'Dying Is MainStream #MONEY',
'I Honestly Love When People Hate Even When There Close To You.',
'"It'+"'s Your Birthday"+'" Mateo Said. I Didn'+'t Respond. "Are You Not Excited To Be 15" He Asked. Reading My Book I Uttered "I Turned 15 Long Ago"',
'If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It',
'People Use To Ask Me What Do You Wanna Be When You Get Older And I Would Say What A Stupid Question The Real Question Is What Am I Right Now',
'If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth.',
'Why Is It Always 3 WHY IS IT ALWAYS 3!!!!!',
'There Is No Nutrients In Our Food Anymore Or In Our Soil OR IN OUR WATER.',
'You Would Have To Eat 5 Apples Today To Get The Same Nutritional Value As An Apple From 1950. #Fallow',
'Water In The Eyes And Alcohol In The Eyes Are Pretty Much The Same I Know This From First Hand Experience.',
'You Do Not Know Who You Are Or Why Your Here So When You See Someone Who Dose The Society Comes Together As A Whole And Destroys Them.',
'To The Artist Of This Coming Generation And Of The Renaissance.',
"The People That Truly Understand Your Art are The People Who Don't Comment",
'The Great Gatsby Is One Of The Greatest Movies Of All Time, Coachella.',
'If Everybody In The World Dropped Out Of School We Would Have A Much More Intelligent Society.',
'I Saw Owen Wilson One Time From A Distance And We Just Stared At Each Other, Then His Car Drove Off.',
'All Of Your Idols Are Going To Start Writing Their Own Articles, And These Uninformed "Journalists" Will Become Obsolete.',
"I'm Gunna Be So Hype On Stage Tomorrow I Might Throw Up.",
'I Would Like To Remind You Guys That I Designed My Very Own Musical App Platform And Released My Debut Album For Free.',
'"Every Rich Kid Has A Sweet 16 So Why Didn'+"'t We Hear About Jaden's?"+'" OHH Wait He Didn'+"'t Have One!",
'Instagram Is A BlackHole Of Time And Energy.',
'That Moment When You Can'+"'t Sleep Soo You Start Doing Math.",
"Don't Become Attached Cause Then You Disconnect And Once You Gather Stress You'll Be Obsessed With Flipin Checks",
"I Never Realized How Dysfunctional A King Is Without A Queen • • • Balance Is Key.",
"I Really Dislike When All The Pretty Girls Hangout At Once • • • #CauseImNeverThere",

]

function copy() {
    var index = Math.floor(Math.random() * quotes.length);
    //Get Input Element
    var copyDiv = document.getElementById('text');
    copyDiv.textContent = quotes[index];

    //Give the text element focus
    copyDiv.focus();

    //Select all content
    document.execCommand('SelectAll');

    //Copy Content
    document.execCommand("Copy", false, null);
}


chrome.commands.onCommand.addListener(function(command) {
  //chrome.tabs.create({url:"popup.html"});
  copy();
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    copy();
  });