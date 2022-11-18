import { matchPath, useLocation } from "react-router-dom";

export default function useCheckPath() {
  const location = useLocation();

  if (matchPath({ path: "/app/home" }, location.pathname) !== null) {
    const pathname = matchPath({ path: "/app/home" }, location.pathname);
    return pathname?.pattern.path;
  }

  if (matchPath({ path: "/app/post" }, location.pathname) !== null) {
    const pathname = matchPath({ path: "/app/post" }, location.pathname);
    return pathname?.pattern.path;
  }

  if (
    matchPath({ path: "/app/chat/one/:chatId" }, location.pathname) !== null
  ) {
    const pathname = matchPath(
      { path: "/app/chat/one/:chatId" },
      location.pathname
    );
    return pathname?.pattern.path;
  }

  if (
    matchPath({ path: "/app/home/one/:announceId" }, location.pathname) !== null
  ) {
    const pathname = matchPath(
      { path: "/app/home/one/:announceId" },
      location.pathname
    );
    return pathname?.pattern.path;
  } else {
    return null;
  }
}
