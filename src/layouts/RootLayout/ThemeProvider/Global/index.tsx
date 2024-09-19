import { Global as _Global, css, useTheme } from "@emotion/react"

import { ThemeProvider as _ThemeProvider } from "@emotion/react"
import { useEffect } from "react"
import { pretendard } from "src/assets"

export const Global = () => {
  const theme = useTheme()
    // useEffect로 웹폰트 스크립트를 동적으로 추가
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//typesquare.com/accessor/ko/script/typesquare.js?646c19983eac425499843be5ac1e02e5"
    script.type = "text/javascript"
    script.charset = "utf-8"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])
  
  return (
    <_Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          color: ${theme.colors.gray12};
          background-color: ${theme.colors.gray2};
          font-family: 'UD Shin Go Hangul Light';
          font-weight: 400;
          font-style: normal;
        }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: inherit;
          font-style: inherit;
        }

        a {
          all: unset;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: inherit;
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
          border-top: 1px solid ${theme.colors.gray6};
        }
      `}
    />
  )
}
