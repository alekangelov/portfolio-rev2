import { cloneElement, useEffect, useState } from "react";
import { MdImage } from "react-icons/md";
import { size, spinner, spinnerInner } from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

function useSafeImage(url?: string) {
  const [result, setResult] = useState<{
    loading?: boolean;
    error?: string;
  }>({
    loading: true,
  });
  useEffect(() => {
    if (!url) return;
    const img = new Image();
    img.onload = () => {
      setResult({ loading: false });
    };
    img.onerror = () => {
      setResult({ error: "error" });
    };
    img.src = url;
  }, [url]);
  return result;
}

export const SafeImage = ({
  loading: loadingElem,
  fallback,
  ...props
}: Omit<JSX.IntrinsicElements["img"], "loading" | "ref"> & {
  loading?: JSX.Element;
  fallback?: JSX.Element;
}) => {
  const { error, loading } = useSafeImage(props.src);
  if (error) {
    return fallback ? cloneElement(fallback, props) : null;
  }
  if (loading) {
    return loadingElem ? cloneElement(loadingElem, props) : null;
  }
  return <img {...props} />;
};

SafeImage.Fallback = (props: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MdImage size={48} />
    </div>
  );
};

SafeImage.Loading = ({
  size: sizeNum = 80,
  ...props
}: JSX.IntrinsicElements["div"] & { size?: number }) => {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...assignInlineVars(
          {
            size,
          },
          {
            size: `${sizeNum}px`,
          }
        ),
      }}
    >
      <div className={spinner}>
        {Array.from({ length: 12 }).map((e, idx) => {
          return <div key={`loading.${idx}`} className={spinnerInner} />;
        })}
      </div>
    </div>
  );
};
