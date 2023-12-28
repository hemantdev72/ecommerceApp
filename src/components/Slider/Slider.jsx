import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
import {
  nextSlide,
  prevSlide,
  dotSlice,
} from "../../features/slice/sliderSlice";

function Slider() {
  const dispatch = useDispatch();
  const slideIndex = useSelector((state) => state.slider.value);
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item, index) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === slideIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-100"
            }
          >
            <div>
              {parseInt(item.id) === slideIndex && (
                <img src={item.img} alt="shoes" />
              )}
            </div>
            <div>
              <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
            <div className="flex absolute bottom-10 left=[45%]">
              {sliderData.map((dot, index) => (
                <div className="mr-4" key={index}>
                  <div
                    className={
                      index === slideIndex
                        ? "bg-green-300 rounded-full p-4 cursor-pointer"
                        : "bg-white rounded-full p-4 cursor-pointer"
                    }
                    onClick={() => dispatch(dotSlice(index))}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
