import { useEffect } from "react"

const useSiteTitle = title => {
  useEffect(() => {
    document.title = `${title} - TRAVETOR WORLD`;
  }, [title])
};

export default useSiteTitle;