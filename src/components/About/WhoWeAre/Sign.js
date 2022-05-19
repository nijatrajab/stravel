import { motion } from "framer-motion";

const signVariants = {
    hidden: {pathLength: 0},
    visible: {pathLength: 1, transition: {duration: 2, ease: "easeInOut"}},
    exit: {pathLength: 0, transition: {duration: 0.3}}

}

const Sign = () => {
  return (
    <motion.svg
      width="100%"
      height="100"
      viewBox="0 0 264.58333 52.916669"
      version="1.1"
      id="svg5"
      fill="transparent"
    >
      <motion.defs id="defs2">
        <motion.rect
          x="224.46249"
          y="260.36026"
          width="822.35065"
          height="540.86926"
          id="rect3317"
        />
        <motion.rect
          x="96.939293"
          y="290.84241"
          width="1016.2351"
          height="477.60004"
          id="rect1749"
        />
      </motion.defs>
      <motion.g id="layer1">
        <motion.g
          transform="matrix(0.26458333,0,0,0.26458333,-3.3698966,-73.947825)"
          id="text3315"
        >
          <motion.path
            d="m 314.70289,474.60741 c 17.35569,-2.19324 34.71053,-4.38638 44.18207,-13.98604 9.47154,-9.59966 11.06068,-26.60619 5.03977,-38.75783 -6.02091,-12.15163 -19.65265,-19.44749 -36.74171,-25.23147 -17.08907,-5.78397 -37.63434,-10.05535 -55.68864,-6.55512 -18.05429,3.50024 -33.6156,14.7721 -41.89709,24.53952 -8.28148,9.76743 -9.28251,18.02887 0.32387,21.72809 9.60639,3.69923 29.81834,2.83703 47.91321,-0.2746 18.09487,-3.11162 34.07198,-8.47228 44.11004,-19.05228 10.03806,-10.58001 14.13736,-26.37953 16.18715,-37.88097 2.04978,-11.50144 2.04978,-18.70452 -7.82843,-18.32817 -9.87821,0.37635 -29.63435,8.33317 -42.06053,19.50279 -12.42617,11.16961 -17.52107,25.55051 -15.81564,38.3099 1.70543,12.75938 10.2099,23.89599 27.86133,23.35604 17.65142,-0.53995 44.44897,-12.75489 71.98331,-37.09625 27.53433,-24.34136 55.80435,-60.80779 75.96948,-82.66868 20.16513,-21.8609 32.22391,-29.11491 41.49412,-31.50047 9.27021,-2.38557 15.75042,0.0967 16.99562,5.90467 1.24521,5.80796 -2.74316,14.94118 -11.8873,25.96936 -9.14414,11.02818 -23.44367,23.95115 -39.60623,31.90793 -16.16256,7.95678 -34.18789,10.94708 -49.21307,12.41531 -15.02518,1.46823 -27.04955,1.41419 -37.78849,-2.98926 -10.73895,-4.40346 -20.19189,-13.15693 -20.12095,-26.1788 0.0709,-13.02187 9.66679,-30.31065 24.08639,-39.92304 14.4196,-9.6124 33.66091,-11.54754 42.258,3.49177 8.5971,15.0393 6.55062,47.05078 7.25565,63.22555 0.70503,16.17477 4.16032,16.51298 17.22775,16.00485 13.06743,-0.50812 35.74617,-1.86239 47.8412,-8.46922 12.09504,-6.60684 13.6069,-18.46666 13.30746,-24.621 -0.29944,-6.15434 -2.41139,-6.60233 -18.01533,7.65078 -15.60394,14.25311 -44.6975,43.20643 -61.65296,59.74876 -16.95546,16.54234 -21.77213,20.67301 -16.5594,22.80284 5.21273,2.12983 20.45342,2.25867 32.16042,-2.9877 11.70701,-5.24636 19.88081,-15.86763 26.03021,-23.60736 6.14941,-7.73972 10.27404,-12.59744 12.99229,-13.80411 2.71826,-1.20667 4.02927,1.23657 3.18254,4.17694 -0.84674,2.94038 -3.85045,6.37883 -3.00313,7.73936 0.84732,1.36052 5.54464,0.64329 8.56602,0.17991 3.02139,-0.46338 4.36668,-0.67289 0.18069,3.45707 -4.18598,4.12995 -13.90215,12.59897 -20.01176,17.59194 -6.10961,4.99298 -8.6126,6.5098 -5.99519,8.14419 2.61742,1.63439 10.3541,3.3858 18.97013,0.84369 8.61602,-2.5421 18.11186,-9.37709 22.71775,-12.08232 4.60589,-2.70523 4.32201,-1.28153 3.99874,0.93272 -0.32328,2.21426 -0.68598,5.21881 1.11315,6.82512 1.79912,1.60631 5.75878,1.81513 12.16968,-0.65901 6.4109,-2.47415 15.27335,-7.63081 22.60366,-12.79752 7.3303,-5.1667 13.1283,-10.34326 16.20018,-13.41496 3.07187,-3.0717 3.41774,-4.03901 1.28266,-4.93789 -2.13509,-0.89888 -6.7523,-1.72891 -11.55995,-1.64606 -4.80765,0.0829 -9.80508,1.07893 -13.93112,2.71159 -4.12605,1.63266 -7.37991,3.90177 -11.67965,7.75953 -4.29974,3.85776 -9.64487,9.30375 -12.25853,12.159 -2.61366,2.85525 -2.49629,3.11845 7.31485,-1.335 9.81114,-4.45345 29.31538,-13.62178 39.96406,-18.04583 10.64869,-4.42405 12.44065,-4.10406 8.61058,0.38904 -3.83008,4.4931 -13.28075,13.15919 -18.78172,18.88331 -5.50098,5.72411 -7.05176,8.50558 -7.43178,10.36896 -0.38003,1.86339 0.40963,2.80786 1.54752,3.3301 1.13788,0.52225 2.62376,0.62326 5.85782,-0.16073 3.23406,-0.78398 8.21652,-2.45263 17.0628,-7.4023 8.84628,-4.94967 21.55614,-13.18003 29.70463,-18.00143 8.14848,-4.82139 11.73493,-6.23354 14.27961,-6.6071 2.54468,-0.37355 4.0468,0.29076 4.31656,1.63515 0.26976,1.34438 -0.69142,3.36885 -2.96775,5.87907 -2.27633,2.51022 -5.86793,5.50652 -8.92134,8.22809 -3.05341,2.72158 -5.56835,5.16818 -7.30789,7.29615 -1.73955,2.12797 -2.7034,3.93679 -2.87979,5.40105 -0.1764,1.46426 0.4338,2.58305 1.98769,3.0686 1.55389,0.48555 4.05106,0.33909 9.82197,-2.26174 5.77092,-2.60083 14.81576,-7.6557 22.08745,-12.54346 7.2717,-4.88776 12.77009,-9.60823 16.85351,-13.40765 4.08342,-3.79943 6.75175,-6.67769 7.8102,-8.50304 1.05845,-1.82534 0.50612,-2.59878 -0.7217,-2.41657 -1.22782,0.1822 -3.13054,1.32134 -5.7916,3.5643 -2.66105,2.24297 -6.07998,5.58945 -8.40687,8.25934 -2.32689,2.6699 -3.56143,4.66276 -4.44927,7.45011 -0.88784,2.78734 -1.42897,6.36841 -0.93179,8.86006 0.49717,2.49164 2.03143,3.8936 4.58347,4.07488 2.55204,0.18127 6.12207,-0.85698 9.35766,-2.36326 3.23559,-1.50627 6.13698,-3.48052 8.73459,-4.53804 2.59761,-1.05752 4.89056,-1.19836 8.58465,-1.89099 3.69408,-0.69263 8.78926,-1.93687 13.6828,-3.77326 4.89354,-1.8364 9.58547,-4.2648 13.15415,-6.79142 3.56867,-2.52662 6.01429,-5.15153 7.2423,-6.8737 1.22802,-1.72217 1.23835,-2.54246 0.39176,-3.11356 -0.8466,-0.5711 -2.55123,-0.89221 -5.84109,-0.43625 -3.28986,0.45596 -8.16429,1.68933 -12.37096,3.46295 -4.20668,1.77362 -7.74491,4.08734 -10.66162,6.28201 -2.91671,2.19467 -5.21154,4.27004 -7.34219,7.00334 -2.13065,2.73329 -4.09674,6.12396 -5.08183,8.92448 -0.9851,2.80052 -0.98933,5.01004 0.31858,6.75565 1.30791,1.74562 3.92665,3.02763 7.08809,3.5543 3.16143,0.52668 6.86563,0.29865 10.01887,-0.28889 3.15324,-0.58753 5.75574,-1.53438 8.51573,-2.90015 2.75999,-1.36577 5.67759,-3.15041 8.43242,-4.7548 2.75482,-1.60439 5.34664,-3.02842 12.90888,-8.21902 7.56224,-5.1906 20.09448,-14.14742 30.83676,-22.19819 10.74227,-8.05077 19.69404,-15.19506 32.32273,-25.70994 12.62868,-10.51488 28.93347,-24.39969 38.01185,-32.82412 9.07838,-8.42444 10.93019,-11.38845 11.64093,-13.32442 0.71074,-1.93596 0.27965,-2.84472 -1.14909,-3.13014 -1.42874,-0.28541 -3.85529,0.0538 -7.54505,1.81512 -3.68977,1.76128 -8.64191,4.9445 -20.35243,14.4626 -11.71052,9.5181 -30.17843,25.37028 -43.76762,37.75255 -13.5892,12.38228 -22.29888,21.29388 -29.22599,29.50612 -6.92711,8.21225 -12.07113,15.72444 -14.83881,20.21036 -2.76769,4.48592 -3.15889,5.94488 -3.14911,7.235 0.01,1.29012 0.41991,2.41079 1.53287,3.13662 1.11295,0.72584 2.92795,1.0578 9.74158,-1.7839 6.81362,-2.8417 18.6261,-8.85641 30.43843,-14.87105"
            strokeWidth="5"
            stroke="var(--main-orange)"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={signVariants}
            id="path15019"
          />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export default Sign;
