"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface FooterBackgroundContextValue {
  /** The current page's Hero photo path, or `null` to fall back to the Footer's own default (`getSectorImage(null)`). */
  image: string | null;
  /** CSS `object-position` for the Footer's photo layer — lets a page bias the crop toward whichever band of its own photo reads best once cropped to the Footer's own (much shorter/wider) aspect ratio. Defaults to `"center"`, which is right for most photos; only the home page's own night skyline photo needs an override (see `app/[locale]/page.tsx`). */
  objectPosition: string;
  setBackground: (image: string | null, objectPosition?: string) => void;
}

const DEFAULT_OBJECT_POSITION = "center";

const FooterBackgroundContext = createContext<FooterBackgroundContextValue>({
  image: null,
  objectPosition: DEFAULT_OBJECT_POSITION,
  setBackground: () => {},
});

/**
 * Coordinates the Footer's background photo (rendered once in the root
 * layout, via `FooterBackgroundImage`) with whichever page is currently
 * active. Holds only a ready-to-use image path — set by a page-level
 * `SetFooterBackgroundImage` instance (see `app/[locale]/page.tsx` and
 * `app/[locale]/sectors/[slug]/page.tsx`) and cleared back to `null`
 * automatically when that page unmounts. Same pattern as
 * `WhatsAppMessageContext`.
 */
export function FooterBackgroundProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [image, setImage] = useState<string | null>(null);
  const [objectPosition, setObjectPosition] = useState(DEFAULT_OBJECT_POSITION);

  const setBackground = useCallback(
    (
      nextImage: string | null,
      nextObjectPosition = DEFAULT_OBJECT_POSITION,
    ) => {
      setImage(nextImage);
      setObjectPosition(nextObjectPosition);
    },
    [],
  );

  const value = useMemo<FooterBackgroundContextValue>(
    () => ({ image, objectPosition, setBackground }),
    [image, objectPosition, setBackground],
  );

  return (
    <FooterBackgroundContext.Provider value={value}>
      {children}
    </FooterBackgroundContext.Provider>
  );
}

export function useFooterBackground() {
  return useContext(FooterBackgroundContext);
}
