console.log("location", location);
// 1.what View show to user base on route?
function router(params) {
  //routes
  const routes = [
    {
      path: "/",
      view: () => console.log("home"),
    },
    {
      path: "/about",
      view: () => console.log("about"),
    },
    {
      path: "/gallery",
      view: () => console.log("gallery"),
    },
    {
      path: "/contact",
      view: () => console.log("contact"),
    },
    {
      path: "/sign-in",
      view: () => console.log("sign-in"),
    },
    {
      path: "/sign-up",
      view: () => console.log("sign-up"),
    },
  ];
  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: item.path === location.pathname, //boolean
    };
  });
  console.log("potentialRoutes", potentialRoutes);
  let match = potentialRoutes.find((route) => route.isMatch);
  console.log("match", match.route.view());
  if (!match) {
    match = {
      route: { path: "/404", view: () => console.log("note-Found") },
      isMatch: true,
    };
  }
}
// 2.push user to new url
// pushState
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}
//3. back and forward browser run url
//popState
window.addEventListener("popstate", router);

//DOMContentLoaded start load without refresh
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    // e.target.hasAttribute("data-link") Or matches
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      //   console.log(e.target.href);
      navigateTo(e.target.href);
    }
  });
  router();
});
