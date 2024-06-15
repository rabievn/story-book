import { memo, SVGProps } from 'react'

export const BasketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16.148"
    viewBox="0 0 16 16.148"
    {...props}
  >
    <g
      id="Сгруппировать_16914"
      data-name="Сгруппировать 16914"
      transform="translate(-1109 -152.949)"
    >
      <rect
        id="Прямоугольник_5082"
        data-name="Прямоугольник 5082"
        width="16"
        height="16"
        transform="translate(1109 153)"
        fill="none"
      />
      <g id="delete-2-svgrepo-com" transform="translate(1110.6 153.449)">
        <path
          id="Контур_8611"
          data-name="Контур 8611"
          d="M10,12v4.208"
          transform="translate(-4.951 -4.426)"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Контур_8612"
          data-name="Контур 8612"
          d="M14,12v4.208"
          transform="translate(-5.584 -4.426)"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Контур_8613"
          data-name="Контур 8613"
          d="M4,7H17.465"
          transform="translate(-4 -3.634)"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Контур_8614"
          data-name="Контур 8614"
          d="M6,10v6.733a2.525,2.525,0,0,0,2.525,2.525h5.049A2.525,2.525,0,0,0,16.1,16.733V10"
          transform="translate(-4.317 -4.109)"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Контур_8615"
          data-name="Контур 8615"
          d="M9,4.683A1.683,1.683,0,0,1,10.683,3h1.683a1.683,1.683,0,0,1,1.683,1.683V6.366H9Z"
          transform="translate(-4.792 -3)"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </g>
  </svg>
)
const Memo = memo(BasketIcon)

export { Memo as ReactComponent }
