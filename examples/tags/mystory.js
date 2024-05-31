var storyContent = ﻿{"inkVersion":20,"root":[["^Let's make a tour of all TAGS included by default with Inkproved.","\n","^Most are also available with standard Ink library, some are exclusive to Inkproved.","\n",["ev",{"^->":"0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^Yes, let's go ! ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.4.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["^So first, a TAG is something you can add in your Ink script that does not show, but is parsed by Ink when rendering each line.","\n",["^It's a hash, followed by its label, separate from its value by :","\n",["ev",{"^->":"0.g-0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Please explain me a bit more ",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.g-1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Just test them ",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"0.g-0.g-1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"LIST_OF_TAGS"},{"->":"0.g-2"},{"#f":5}],"c-2":["ev",{"^->":"0.g-0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"TEST_TAGS"},{"->":"0.g-2"},{"#f":5}],"#f":5,"#n":"g-1"}],{"#f":5}],"g-2":["done",{"#f":5}]}],"done",{"LIST_OF_TAGS":[[["^There is a few TAGS by default in Ink as the followings:","\n","^> IMAGE","\n","^> AUDIO","\n","^> AUDIOLOOP","\n","^> VIDEO","\n","^> VIDEOLOOP","\n","^> LINK","\n","^> LINKOPEN","\n","^> BACKGROUND","\n","^> CLASS","\n","^> CLEAR","\n","^> RESTART","\n",["^Their names are pretty self explaining.","\n",["^They all need a value which you set as <b>IMAGE: image.jpg</b> or <b>LINKOPEN: pages/page1.html</b>.","\n",["^Except <b>CLEAR</b> and <b>RESTART</b>, which doesn't need any value.","\n",["^As an example, all answers in this script have a TAG <b>CLASS: me</b> TAG right after its text so a CSS class is defined as <b>\"me\"</b> to put them on the right with a specified color.","\n",["ev",{"^->":"LIST_OF_TAGS.0.g-0.g-1.g-2.g-3.g-4.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^OK ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"LIST_OF_TAGS.0.g-0.g-1.g-2.g-3.g-4.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"LIST_OF_TAGS.0.g-5"},{"#f":5}],"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],{"g-5":["^Specifically to Inkproved, all assets must be in a <em>assets</em> folder next to your <em>index.html</em> file.","\n",["^<b>AUDIO: mysound1.mp3</b> and <b>AUDIOLOOP: mysound1.mp3</b> loads the file as <em>assets/audio/mysound1.mp3</em>.","\n",["^<b>IMAGE: myimage.jpg</b> loads the file as <em>assets/images/myimage.jpg</em>.","\n",["^<b>LINK: mydocument.html</b> and <b>LINKOPEN: mydocument.html</b> loads the file as <em>assets/documents/mydocument.html</em>.","\n",["^<b>BACKGROUND: mybackground.jpg</b> loads the file as <em>assets/backgrounds/mybackground.jpg</em> as a background on the \"ink__container\" HTML element.","\n",["^<b>CLEAR</b> reverts to the previous step.","\n",["^<b>RESTART</b> restarts the full story from the beginning.","\n",["^Of course, you can add subfolders if you want, like <b>IMAGE: <u>dungeon/</u>path1.jpg</b>.","\n",["ev",{"^->":"LIST_OF_TAGS.0.g-5.g-6.g-7.g-8.g-9.g-10.g-11.g-12.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^OK ",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"LIST_OF_TAGS.0.g-5.g-6.g-7.g-8.g-9.g-10.g-11.g-12.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"LIST_OF_TAGS.0.g-13"},{"#f":5}],"#f":5,"#n":"g-12"}],{"#f":5,"#n":"g-11"}],{"#f":5,"#n":"g-10"}],{"#f":5,"#n":"g-9"}],{"#f":5,"#n":"g-8"}],{"#f":5,"#n":"g-7"}],{"#f":5,"#n":"g-6"}],{"#f":5}],"g-13":["^Inkproved comes with some new <b>TAGS</b> to help you add web/interactive content to your story.","\n","^> <b>AUDIOLOOPSTOP</b> stops the last audio loop added.","\n","^> <b>VIDEO: myvideo.mp4</b> and <b>VIDEOLOOP: myvideo.mp4</b> loads the file as <em>assets/videos/myvideo.mp4</em>.","\n","^> <b>IFRAME: mydocument.html</b> loads the document <em>assets/documents/mydocument.html</em> inside a frame block.","\n",["^For all images, audio, video, background but also links & iframes, you can use external https url. Just replace <b>https://</b> by <b>HTTPS</b> (ex: HTTPSwww.youtube.com/video/...).","\n",["^Also, Inkproved comes with a plugin mechanism, so depending on the plugin you add to your project some new <b>TAGS</b> might be available. (see each plugin documentation to know more).","\n",["ev",{"^->":"LIST_OF_TAGS.0.g-13.g-14.g-15.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^OK let's test each TAG ",{"->":"$r","var":true},null]}],["ev",{"^->":"LIST_OF_TAGS.0.g-13.g-14.g-15.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^I'm good, thanks ",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"LIST_OF_TAGS.0.g-13.g-14.g-15.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"TEST_TAGS"},{"#f":5}],"c-3":["ev",{"^->":"LIST_OF_TAGS.0.g-13.g-14.g-15.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"FINISH"},{"#f":5}],"#f":5,"#n":"g-15"}],{"#f":5,"#n":"g-14"}],{"#f":5}]}],{"#f":1}],"TEST_TAGS":[[["^First, the very storying related <b>TAGS</b>.","\n",["^Using <b>CLEAR</b>, you empty everything within the story container.","\n",["ev",{"^->":"TEST_TAGS.0.g-0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Really? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"TEST_TAGS.0.g-0.g-1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"#":"CLEAR"},{"->":".^.^.^.^.g-2"},{"#f":5}],"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],{"g-2":["^Yep... <b>CLEAR</b> really clears everything.","\n",["^It clears what has been generated, but not variables state, progression in the story flow neither stop playing sounds. You just \"jump\" to another page, not cleaning & restarting everything.","\n",["^It you really want to restart from the beginning (player is dead, die & retry gameplay, ...) you can use the <b>RESTART</b> tag.","\n",["ev",{"^->":"TEST_TAGS.0.g-2.g-3.g-4.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Ok ",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"TEST_TAGS.0.g-2.g-3.g-4.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.^.^.g-5"},{"#f":5}],"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5}],"g-5":["^You can switch to another document/webapge using the <b>LINK</b> tag.","\n",["^Assuming you split your Ink story in different chapters, you could navigate to <em>/chapter2.html</em> using <b>LINK: chapter2.html</b>.","\n",["ev",{"^->":"TEST_TAGS.0.g-5.g-6.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Ok ",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"TEST_TAGS.0.g-5.g-6.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.^.g-7"},{"#f":5}],"#f":5,"#n":"g-6"}],{"#f":5}],"g-7":["^To open another document/webpage in a new window/tab outside your Ink story, you can rather use the <b>LINKOPEN</b> tag.","\n",{"#":"LINKOPEN: HTTPSwww.inklestudios.com/"},["^The inkstudioes.com website probably just did open.","\n",["ev",{"^->":"TEST_TAGS.0.g-7.g-8.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Ok ",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"TEST_TAGS.0.g-7.g-8.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.^.g-9"},{"#f":5}],"#f":5,"#n":"g-8"}],{"#f":5}],"g-9":["^Good !","\n",["^Now, images.","\n",{"#":"IMAGE: image1.jpg"},["^This image is loaded from the local <em>assets/images/</em> folder. It has probably loaded within a few milliseconds.","\n",["ev",{"^->":"TEST_TAGS.0.g-9.g-10.g-11.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Yeap ",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"TEST_TAGS.0.g-9.g-10.g-11.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"#":"IMAGE: HTTPSimages.unsplash.com/photo-1715937527911-14a019e0bd95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"->":".^.^.^.^.^.g-12"},{"#f":5}],"#f":5,"#n":"g-11"}],{"#f":5,"#n":"g-10"}],{"#f":5}],"g-12":["^This image is loaded from the Unspash website (credits to Maëva Vigier).","\n",["^Depending on your internet connection it could take a second or more.","\n",["^Note that Inkproved waits for it to load before it continues.","\n",["ev",{"^->":"TEST_TAGS.0.g-12.g-13.g-14.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^Fully loaded! ",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"TEST_TAGS.0.g-12.g-13.g-14.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.^.^.g-15"},{"#f":5}],"#f":5,"#n":"g-14"}],{"#f":5,"#n":"g-13"}],{"#f":5}],"g-15":["^Of course you can use the image format of your choice. JPG, PNG, WebP, GIF, SVG ... as far as a regular web browser supports it, it's OK.","\n",["^Inkproved renders images at 100% its container width by default, but feel free to customize this behavior in your CSS file if needed.","\n",["^While we're on images, let's now change the background.","\n",["ev",{"^->":"TEST_TAGS.0.g-15.g-16.g-17.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^New background indeed ",{"->":"$r","var":true},null]}],{"c-6":["ev",{"^->":"TEST_TAGS.0.g-15.g-16.g-17.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.^.^.g-18"},{"#f":5}],"#f":5,"#n":"g-17"}],{"#f":5,"#n":"g-16"}],{"#f":5}],"g-18":["^Here is the first background.","\n",{"#":"BACKGROUND: background1.png"},["ev",{"^->":"TEST_TAGS.0.g-18.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^Humm... Let's set background2 ",{"->":"$r","var":true},null]}],{"c-7":["ev",{"^->":"TEST_TAGS.0.g-18.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.g-19"},{"#f":5}],"#f":5}],"g-19":["^You're right, background2 it is.","\n",{"#":"BACKGROUND: background2.jpg"},["^Background behavior (tiling, attachement, position, ...) is to be set in your CSS file. Default is tiling from top left.","\n",["ev",{"^->":"TEST_TAGS.0.g-19.g-20.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^What about audio ",{"->":"$r","var":true},null]}],{"c-8":["ev",{"^->":"TEST_TAGS.0.g-19.g-20.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.^.g-21"},{"#f":5}],"#f":5,"#n":"g-20"}],{"#f":5}],"g-21":["^Two ways to play an audio file in Ink. Play it once with <b>AUDIO</b>, or play it in loop with <b>AUDIOLOOP</b>.","\n",["ev",{"^->":"TEST_TAGS.0.g-21.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":18},{"s":["^Play a BIP once first ",{"->":"$r","var":true},null]}],{"c-9":["ev",{"^->":"TEST_TAGS.0.g-21.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.g-22"},{"#f":5}],"#f":5}],"g-22":["^BIP ",{"#":"AUDIO: bip.mp3"},"\n",["ev",{"^->":"TEST_TAGS.0.g-22.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":18},{"s":["^Play it in loop now ",{"->":"$r","var":true},null]}],{"c-10":["ev",{"^->":"TEST_TAGS.0.g-22.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.g-23"},{"#f":5}],"#f":5}],"g-23":["^BIP BIP BIP BIP BIP... ",{"#":"AUDIOLOOP: HTTPScdn.freesound.org/previews/736/736267_15090270-lq.mp3"},"\n",["^this sound is loaded from freesound.org.","\n",["ev",{"^->":"TEST_TAGS.0.g-23.g-24.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":18},{"s":["^OK stop it ",{"->":"$r","var":true},null]}],{"c-11":["ev",{"^->":"TEST_TAGS.0.g-23.g-24.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.^.g-25"},{"#f":5}],"#f":5,"#n":"g-24"}],{"#f":5}],"g-25":["^To stop the sound in loop, use <b>AUDIOLOOPSTOP</b>, no value needed. ",{"#":"AUDIOLOOPSTOP"},"\n",["^Now that the audio loop has stopped, let's do the same with video.","\n",["ev",{"^->":"TEST_TAGS.0.g-25.g-26.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-12","flg":18},{"s":["^Let's grab the popcorn! ",{"->":"$r","var":true},null]}],{"c-12":["ev",{"^->":"TEST_TAGS.0.g-25.g-26.c-12.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"#":"VIDEO: big-buck-bunny-intro.mp4"},{"->":".^.^.^.^.g-27"},{"#f":5}],"#f":5,"#n":"g-26"}],{"#f":5}],"g-27":["^Using <b>VIDEO</b>, this is the intro of the Big Buck Bunny film from the Blender Foundation.","\n",["^And using the <b>VIDEOLOOP</b>, this helmet is a 10-seconds video playing in loop. ",{"#":"VIDEOLOOP: yellow-hardhat.mp4"},"\n",["ev",{"^->":"TEST_TAGS.0.g-27.g-28.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-13","flg":18},{"s":["^Ok, nice ",{"->":"$r","var":true},null]}],{"c-13":["ev",{"^->":"TEST_TAGS.0.g-27.g-28.c-13.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.^.g-29"},{"#f":5}],"#f":5,"#n":"g-28"}],{"#f":5}],"g-29":["^A new TAG in Inkproved, <b>IFRAME</b> can include an external document such as a PDF file any external HTML document inside your Ink story.","\n",["^This is page1.html file inside <em>assets/documents</em>.","\n",{"#":"IFRAME: page1.html"},["^which could be a mini-game, a form, or whatever you want/need that no Ink plugin can help you to make.","\n",["ev",{"^->":"TEST_TAGS.0.g-29.g-30.g-31.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-14","flg":18},{"s":["^Ok ",{"->":"$r","var":true},null]}],{"c-14":["ev",{"^->":"TEST_TAGS.0.g-29.g-30.g-31.c-14.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"#":"IFRAME: HTTPSwww.inklestudios.com/"},{"->":".^.^.^.^.^.g-32"},{"#f":5}],"#f":5,"#n":"g-31"}],{"#f":5,"#n":"g-30"}],{"#f":5}],"g-32":["^Of course, you can also include remote website if their web server policy accepts being included inside an iframe.","\n",["ev",{"^->":"TEST_TAGS.0.g-32.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-15","flg":18},{"s":["^Nice ",{"->":"$r","var":true},null]}],{"c-15":["ev",{"^->":"TEST_TAGS.0.g-32.c-15.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":".^.^.^.g-33"},{"#f":5}],"#f":5}],"g-33":["^Last but not least, CLASS.","\n",["^You can set a classname to each paragraph using CLASS: myclass.","\n",["^Then you need to define this class in your CSS file","\n",{"#":"IMAGE: class-me.png"},["^And tadaaa","\n",["^you can customize how each line of text looks like.","\n",["ev",{"^->":"TEST_TAGS.0.g-33.g-34.g-35.g-36.g-37.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-16","flg":18},{"s":["^Ok ",{"->":"$r","var":true},null]}],{"c-16":["ev",{"^->":"TEST_TAGS.0.g-33.g-34.g-35.g-36.g-37.c-16.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"TEST_TAGS.0.g-38"},{"#f":5}],"#f":5,"#n":"g-37"}],{"#f":5,"#n":"g-36"}],{"#f":5,"#n":"g-35"}],{"#f":5,"#n":"g-34"}],{"#f":5}],"g-38":["^So feel free to create the classes you like, like a blockquote:","\n",["^A few moments later...  ",{"#":"CLASS: blockquote"},"\n",["^or adding your characters' name as they were texting:","\n",["^Hello, i'm Peter ",{"#":"CLASS: peter"},"\n",["^Hello Peter, i'm Steve ",{"#":"CLASS: steve"},"\n",["^...","\n",["^CSS also comes with hover modifiers, so it changes how a line looks when your mouse goes over it. ",{"#":"CLASS: hovering"},"\n",["^Infinite possibilities :)","\n",["ev",{"^->":"TEST_TAGS.0.g-38.g-39.g-40.g-41.g-42.g-43.g-44.g-45.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-17","flg":18},{"s":["^Sure does ",{"->":"$r","var":true},null]}],{"c-17":["ev",{"^->":"TEST_TAGS.0.g-38.g-39.g-40.g-41.g-42.g-43.g-44.g-45.c-17.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: me"},"\n",{"->":"FINISH"},"done",{"#f":5}],"#f":5,"#n":"g-45"}],{"#f":5,"#n":"g-44"}],{"#f":5,"#n":"g-43"}],{"#f":5,"#n":"g-42"}],{"#f":5,"#n":"g-41"}],{"#f":5,"#n":"g-40"}],{"#f":5,"#n":"g-39"}],{"#f":5}]}],{"#f":1}],"FINISH":[[["^OK !","\n",["^I guess that's it for today.","\n",["^You now know how <b>TAGS</b> work in Ink & Inkproved.","\n",["^Have a good day :)","\n","end",{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"#f":1}],"listDefs":{}};