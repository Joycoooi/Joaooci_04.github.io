var posts=["2023/09/01/测试时间/","2023/08/30/06-第1周汇报/","2023/08/30/hello-world/","2023/09/21/s1/","2023/09/12/NEW/","2023/08/30/my-first-paper/","2023/08/31/testing/","2023/09/21/爱了/","2023/09/01/timeline/","2023/08/30/恋爱哪些事/","2023/08/30/我的第一篇博客文章”/","2023/08/30/记一次晚霞/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"◈星港◎Star☆的博客","link":"https://starsharbor.com","avatar":"https://www.helloimg.com/images/2023/09/15/on4icg.png","descr":"以博客面向世界！","siteshot":"https://www.helloimg.com/images/2023/08/21/oSURe9.jpg"},{"name":"一只会飞的旺旺","link":"https://www.wangwangit.com/","avatar":"https://www.wangwangit.com/images/head/a.webp","descr":"效率软件分享、技术大佬","siteshot":"https://bu.dusays.com/2023/09/18/6507c83060ccf.jpg"},{"name":"萜妹","link":"https://tie-blog.netlify.app/","avatar":"https://tie-1315290370.cos.ap-beijing.myqcloud.com/TIE/logo.jpg","descr":"管理学在读博士生","siteshot":"https://bu.dusays.com/2023/09/21/650b9b31e7c64.png","recommend":true},{"name":"新一真厉害","link":"https://www.zealothao.cn/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"每天都是现场直播！","siteshot":"https://bu.dusays.com/2023/09/12/6500284b60a78.jpg","color":"vip","tag":"技术"},{"name":"◈星港◎Star☆的博客","link":"https://starsharbor.com","avatar":"https://www.helloimg.com/images/2023/09/15/on4icg.png","descr":"以博客面向世界！","siteshot":"https://www.helloimg.com/images/2023/08/21/oSURe9.jpg","tag":"动漫"},{"name":"一只会飞的旺旺","link":"https://www.wangwangit.com/","avatar":"https://www.wangwangit.com/images/head/a.webp","descr":"效率软件分享、技术大佬","siteshot":"https://bu.dusays.com/2023/09/18/6507c83060ccf.jpg","tag":"技术"},{"name":"萜妹","link":"https://tie-blog.netlify.app/","avatar":"https://tie-1315290370.cos.ap-beijing.myqcloud.com/TIE/logo.jpg","descr":"管理学在读博士生","siteshot":"https://bu.dusays.com/2023/09/21/650b9b31e7c64.png","tag":"教育"},{"name":"新一真厉害","link":"https://www.zealothao.cn/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"每天都是现场直播！","recommend":true},{"name":"◈星港◎Star☆的博客","link":"https://starsharbor.com","avatar":"https://www.helloimg.com/images/2023/09/15/on4icg.png","descr":"以博客面向世界！","recommend":true},{"name":"一只会飞的旺旺","link":"https://www.wangwangit.com/","avatar":"https://www.wangwangit.com/images/head/a.webp","descr":"效率软件分享、技术大佬","siteshot":"https://bu.dusays.com/2023/09/18/6507c83060ccf.jpg","recommend":true},{"name":"萜妹","link":"https://tie-blog.netlify.app/","avatar":"https://tie-1315290370.cos.ap-beijing.myqcloud.com/TIE/logo.jpg","descr":"管理学在读博士生","siteshot":"https://bu.dusays.com/2023/09/21/650b9b31e7c64.png","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };