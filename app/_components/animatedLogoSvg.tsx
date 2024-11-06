import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const paths = [
  "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 6 204 93 285 C 145 332 120 247 163 261 C 194 270 220 285 209 210 C 203 164 316 187 252 149 C 160 102 299 66 213 29 C 205 17 171 49 100 60 C 138 22 191 -40 155 -30 C 87 -21 85 34 -3 -42 Z",
  "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 -7 216 3 319 C 11 368 13 151 42 285 C 74 351 114 219 224 277 C 139 160 345 195 251 175 C 123 149 177 90 213 29 C 205 17 171 49 100 60 C 138 22 191 -40 155 -30 C 87 -21 85 34 -3 -42 Z",
  "M -70 35 C -23 -3 3 -6 -68 223 C -3 49 50 155 89 259 C 103 299 96 213 120 259 C 165 343 99 207 187 256 C 119 165 189 244 227 169 C 167 183 155 157 185 148 C 246 127 146 108 229 91 C 138 22 191 -40 155 -30 C 87 -21 85 34 -3 -42 Z",
  "M -70 35 C -23 -3 3 -6 -48 188 C -3 49 118 402 127 292 C 130.3333 275.6667 138.6667 278.3333 147 281 C 205 302 131 246 188 224 C 210 222 213 215 203 198 C 189 170 254 186 212 147 C 191 115 268 111 204 98 C 126 81 197 6 260 81 C 87 -21 85 34 -3 -42 Z",
  "M -70 35 C -23 -3 3 -6 -48 188 C -3 49 50 155 89 259 C 87 302 101 203 146 224 C 214 259 155 219 194 223 C 147 169 206 208 237 171 C 250 156 243 145 264 140 C 282 134 232 119 321 108 C 404 97 432 50 300 -8 C 87 -21 85 34 -3 -42 Z",
];
const colors = ["Yellow", "RED", "BLUE", "BLACK", "ORANGE"];
const AnimatedLogoSvg = ({ currentPage }: { currentPage: number }) => {
  const [color, setColor] = useState(colors[0]);
  const [pathData, setPathData] = useState(paths[0]);
  const getColor = (page: number) => {
    return colors[page] || colors[0];
  };
  const getPathDataForPage = (page: number) => {
    return paths[page] || paths[0];
  };

  useEffect(() => {
    const newColor = getColor(currentPage);
    const newPathData = getPathDataForPage(currentPage);

    setPathData(newPathData);
    setColor(newColor);
  }, [currentPage]);

  return (
    <svg className="svg-container" xmlns="http://www.w3.org/2000/svg" viewBox="100 100 500 500">
      <motion.path
        key={currentPage}
        fill={color}
        initial={{ d: pathData }}
        animate={{ d: pathData }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default AnimatedLogoSvg;
