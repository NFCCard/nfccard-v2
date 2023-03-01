import styled from "styled-components";
import tw from "twin.macro";

export const StyledRegisterPageContainer = styled.div`
    ${tw`flex w-full justify-center items-center text-right gap-4 h-[100vh] select-none bg-sadafi dark:bg-black`}
`;

export const StyledSidesWrapper = styled.div`
    ${tw`w-[60%] mobile:w-[90%] flex  rounded-2xl`}
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

export const StyledLogoWrapper = styled.div``;

//background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='600' height='900' preserveAspectRatio='none' viewBox='0 0 600 900'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1021%26quot%3b)' fill='none'%3e%3crect width='600' height='900' x='0' y='0' fill='rgba(93%2c 56%2c 145%2c 1)'%3e%3c/rect%3e%3cpath d='M300 115.38C294.4 115.38 290.82 134.35 290.82 150C290.82 154.92 295.13 156.52 300 156.52C306.54 156.52 313.64 155.94 313.64 150C313.64 135.37 305.81 115.38 300 115.38' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M150 254.55C105.68 254.55 68.62 258.76 50 300C24.5 356.49 77.88 383.82 61.76 450C52.88 486.45 18.53 505.26 0 505.26C-12.35 505.26 0 477.63 0 450C0 375 0 375 0 300C0 225 0 225 0 150C0 75 -37.5 37.5 0 0C37.5 -37.5 75 0 150 0C225 0 225 0 300 0C375 0 375 0 450 0C525 0 562.5 -37.5 600 0C637.5 37.5 600 75 600 150C600 225 600 225 600 300C600 375 600 375 600 450C600 525 600 525 600 600C600 675 600 675 600 750C600 793.42 627.36 817.49 600 836.84C552.36 870.54 519.52 872.56 450 856.1C369.52 837.04 351.06 753.52 300 765.79C259.72 775.47 307.87 863.71 267.31 900C232.87 930.82 208.65 900 150 900C75 900 37.5 937.5 0 900C-37.5 862.5 0 825 0 750C0 699.33 -23.65 648.65 0 648.65C36.83 648.65 60.55 699.25 120.97 750C135.55 762.25 132.24 774.66 150 774.66C211.04 774.66 267.5 788.12 278.57 750C292.85 700.79 215.77 679.12 200.7 600C187.2 529.12 225.35 524.27 221.43 450C217.44 374.27 210.93 371.28 184.88 300C175.21 273.55 173.12 254.55 150 254.55' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M450 414.29C424.17 414.29 409.44 423.81 403.13 450C387.05 516.67 389.65 529.86 405.22 600C413.09 635.47 429.72 661.22 450 661.22C468.59 661.22 469.6 632.01 482.97 600C513.72 526.4 548.57 508.2 538.24 450C532.09 415.34 491.73 414.29 450 414.29' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M256.73 0C275.81 44.52 249.55 84.68 214.29 150C196.18 183.55 186.52 196.13 150 197.73C79.38 200.82 70.72 181.88 0 159.38C-4.28 158.02 0 154.69 0 150C0 75 -37.5 37.5 0 0C37.5 -37.5 75 0 150 0C203.37 0 243.67 -30.48 256.73 0' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M427.27 150C455.75 122.62 418.67 85.94 450 66.67C505.04 32.82 555.89 19.24 600 43.75C630.89 60.91 600 96.88 600 150C600 225 600 225 600 300C600 352.12 628.54 399.48 600 404.24C553.54 411.98 520.98 316.59 450 325C370.98 334.36 360.48 446.6 300 439.77C249.73 434.1 228.49 366.24 228.49 300C228.49 251.79 255.52 244.43 300 210.87C354.91 169.43 380.75 194.72 427.27 150' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M253.52 600C253.52 536.64 276.15 468 300 468C324.01 468 349.25 536.9 349.25 600C349.25 639.56 324.14 673.33 300 673.33C276.27 673.33 253.52 639.31 253.52 600' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M524.18 600C524.18 545.53 579.15 492.19 600 492.19C617.06 492.19 600 546.1 600 600C600 657.5 617.25 715 600 715C579.34 715 524.18 656.93 524.18 600' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 699.32C18.41 699.32 30.34 724.54 60.48 750C105.34 787.9 107.39 785.76 150 826.03C186.76 860.76 219.23 878.03 219.23 900C219.23 915.01 184.62 900 150 900C75 900 75 900 0 900C0 900 0 900 0 900C0 825 0 825 0 750C0 724.66 -11.83 699.32 0 699.32' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M427.78 750C427.78 743.44 438.43 737.76 450 737.76C466.2 737.76 483.33 743.37 483.33 750C483.33 756.8 466.05 764.63 450 764.63C438.27 764.63 427.78 756.88 427.78 750' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M150 112.5C93.71 114.33 72.63 60.47 0 6C-2.37 4.22 -2.88 0.12 0 0C72.12 -2.88 75 0 150 0C167.31 0 184.62 -12.78 184.62 0C184.62 43.47 186.02 111.33 150 112.5' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M272.09 300C272.09 281.19 282.19 265.22 300 265.22C331.44 265.22 370.59 279.07 370.59 300C370.59 323.73 329.2 354.55 300 354.55C279.95 354.55 272.09 325.85 272.09 300' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M529.41 300C529.41 257.77 580.57 200 600 200C615.87 200 600 250 600 300C600 320.34 611.75 340.68 600 340.68C576.46 340.68 529.41 328.11 529.41 300' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M565.38 600C565.38 575.13 590.48 550.78 600 550.78C607.79 550.78 600 575.39 600 600C600 626.25 607.88 652.5 600 652.5C590.57 652.5 565.38 625.99 565.38 600' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M104.17 900C104.17 894.04 129.14 877.4 150 877.4C162.63 877.4 171.15 893.29 171.15 900C171.15 904.59 160.57 900 150 900C127.09 900 104.17 905.34 104.17 900' stroke='rgba(138%2c 107%2c 240%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1021'%3e%3crect width='600' height='900' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

export const StyledFirstSide = styled.div`
    ${tw`flex items-center justify-center w-full  rounded-l-2xl`}
    & {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='600' height='900' preserveAspectRatio='none' viewBox='0 0 600 900'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1067%26quot%3b)' fill='none'%3e%3crect width='600' height='900' x='0' y='0' fill='rgba(57%2c 34%2c 89%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c303.034C55.878%2c302.933%2c98.293%2c256.219%2c144.058%2c224.158C187.951%2c193.408%2c235.15%2c166.048%2c261.858%2c119.586C290.043%2c70.556%2c312.445%2c11.77%2c297.5%2c-42.774C282.873%2c-96.156%2c219.891%2c-117.343%2c185.136%2c-160.421C148.578%2c-205.733%2c141.086%2c-276.532%2c88.591%2c-301.712C35.168%2c-327.337%2c-31.473%2c-315.114%2c-85.175%2c-290.079C-135.593%2c-266.575%2c-158.398%2c-210.852%2c-195.404%2c-169.318C-233.059%2c-127.055%2c-296.639%2c-99.838%2c-304.606%2c-43.796C-312.573%2c12.247%2c-263.719%2c58.58%2c-234.712%2c107.189C-208.875%2c150.485%2c-183.106%2c192.377%2c-144.393%2c224.679C-101.477%2c260.488%2c-55.893%2c303.135%2c0%2c303.034' fill='%2325163a'%3e%3c/path%3e%3cpath d='M600 1281.0140000000001C674.274 1279.061 748.854 1268.993 812.498 1230.654 877.245 1191.65 926.307 1132.079 959.756 1064.295 993.9110000000001 995.081 1011.0450000000001 918.755 1004.354 841.863 997.412 762.082 971.856 683.702 921.239 621.645 869.77 558.544 796.832 518.492 719.5840000000001 492.734 640.228 466.274 548.407 433.453 474.532 472.695 400.692 511.918 405.43100000000004 620.924 354.06399999999996 686.895 306.737 747.678 207.837 766.333 187.94799999999998 840.756 168.015 915.345 221.64999999999998 987.924 255.00900000000001 1057.552 287.781 1125.954 316.537 1200.785 380.197 1242.02 443.943 1283.31 524.076 1283.01 600 1281.0140000000001' fill='%234d2e78'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1067'%3e%3crect width='600' height='900' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
export const StyledSecondSide = styled.div`
    ${tw`w-full `}
`;

export const StyledFormContainer = styled.div`
    ${tw`flex w-full mobile:rounded-2xl rounded-r-2xl max-w-3xl h-[fit-content] flex-col justify-center items-center dark:bg-smokeWhite bg-black p-8 mobile:p-3 `}
`;

// bg-[#d68438]

export const StyledFormWrapper = styled.div`
    ${tw`flex w-full  flex-wrap flex-col gap-1 `}
`;

export const StyledForm = styled.form`
    ${tw`flex w-full flex-col gap-2 self-stretch`}
`;

export const StyledHeaderForm = styled.h3`
    ${tw`text-center mobile:text-sm font-semibold dark:text-black text-smokeWhite`}
`;

export const StyledInputWrapper = styled.div`
    ${tw`flex flex-col relative grow-[1] pb-3  shrink-[0] `}
`;

export const StyledLabel = styled.label`
    ${tw`text-white dark:text-black text-sm`}
`;

export const StyledButton = styled.button`
    ${tw`w-full bg-secondary p-2 text-center rounded-[6px] text-white text-[12px]`}
`;
