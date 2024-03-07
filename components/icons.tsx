import {
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (

         <svg viewBox="0 0 24 15"  {...props} xmlns="http://www.w3.org/2000/svg">
         <path d="M10.3312 11.3434C10.274 11.3487 10.233 11.3558 10.1918 11.3561C9.73469 11.3569 9.27776 11.3556 8.82062 11.3571C8.71252 11.3575 8.62932 11.3183 8.56281 11.2323C8.16501 10.7175 7.76256 10.2064 7.36919 9.68841C7.27502 9.56425 7.1724 9.51231 7.01615 9.52033C6.77206 9.53279 6.52692 9.52371 6.27227 9.52371C6.27227 10.1322 6.27227 10.733 6.27227 11.3406C5.80711 11.3406 5.35188 11.3406 4.89453 11.3406C4.89453 9.47663 4.89453 7.61641 4.89453 5.75112C4.92494 5.74817 4.95154 5.7431 4.97794 5.74331C5.93148 5.74394 6.88503 5.73677 7.83836 5.74922C8.35209 5.75598 8.83731 5.88351 9.26129 6.19454C9.70196 6.5178 9.91902 6.95699 9.94077 7.49711C9.95576 7.87274 9.89769 8.23296 9.69203 8.55771C9.49883 8.86261 9.21948 9.06256 8.89643 9.20868C8.84237 9.23317 8.7879 9.25703 8.72413 9.28533C9.26171 9.97346 9.79127 10.6519 10.3312 11.3434ZM6.27861 8.33537C6.79402 8.32312 7.30162 8.32017 7.80817 8.29293C7.95597 8.2849 8.11328 8.23085 8.24292 8.15695C8.50263 8.00914 8.57063 7.76189 8.52396 7.47705C8.48237 7.22304 8.31556 7.09255 8.08034 7.03195C8.01911 7.01611 7.95639 6.99965 7.89368 6.99669C7.55563 6.98106 7.21759 6.96692 6.87933 6.95763C6.68085 6.95214 6.48194 6.95657 6.27861 6.95657C6.27861 7.41624 6.27861 7.86261 6.27861 8.33537Z" />
         <path d="M19.9197 10.1446C20.9723 10.1446 22.0012 10.1446 23.0354 10.1446C23.0354 10.5487 23.0354 10.9469 23.0354 11.3509C21.3473 11.3509 19.6598 11.3509 17.9621 11.3509C17.9621 11.1885 17.9615 11.0287 17.9624 10.8686C17.9628 10.7535 17.9691 10.6385 17.9653 10.5238C17.9621 10.4311 18.0027 10.3623 18.0614 10.2975C18.6634 9.63402 19.2647 8.97038 19.8661 8.30653C20.248 7.88487 20.6296 7.46299 21.0111 7.04091C21.0327 7.01726 21.0519 6.9915 21.0926 6.94188C21.0065 6.94188 20.9474 6.94188 20.8882 6.94188C20.001 6.94188 19.1137 6.94188 18.2265 6.94188C18.0719 6.94188 18.0599 6.93132 18.0595 6.77887C18.0586 6.47313 18.0588 6.16718 18.0595 5.86143C18.0597 5.7472 18.0827 5.72461 18.1991 5.72461C19.7827 5.72545 21.3665 5.72693 22.9501 5.72588C23.0305 5.72588 23.0534 5.75016 23.0521 5.82955C23.0491 6.01388 23.0536 6.19843 23.0597 6.38255C23.0664 6.57786 23.001 6.74593 22.872 6.88825C22.4955 7.30252 22.1154 7.71363 21.7387 8.1279C21.1564 8.7681 20.5757 9.40978 19.9947 10.051C19.9733 10.0747 19.9545 10.1009 19.9197 10.1446Z" />
         <path d="M4.5958 6.97781C3.51916 6.97781 2.45075 6.97781 1.37473 6.97781C1.37473 7.32219 1.37473 7.66193 1.37473 8.01053C2.32701 8.01053 3.27929 8.01053 4.23791 8.01053C4.23791 8.42016 4.23791 8.82113 4.23791 9.23013C3.28542 9.23013 2.33609 9.23013 1.37516 9.23013C1.37516 9.94149 1.37516 10.6448 1.37516 11.3524C0.913587 11.3524 0.463418 11.3524 0.00585938 11.3524C0.00585938 9.49913 0.00585938 7.64588 0.00585938 5.78735C1.53563 5.78735 3.06287 5.78735 4.5958 5.78735C4.5958 6.18326 4.5958 6.57515 4.5958 6.97781Z" />
         <path d="M15.8586 11.354C15.3856 11.354 14.9289 11.354 14.4612 11.354C14.4612 9.89835 14.4612 8.4446 14.4612 6.98049C13.8529 6.98049 13.2555 6.98049 12.6533 6.98049C12.6533 6.56875 12.6533 6.16736 12.6533 5.75879C14.322 5.75879 15.9905 5.75879 17.6628 5.75879C17.6628 6.16208 17.6628 6.56115 17.6628 6.97141C17.0638 6.97141 16.4667 6.97141 15.8586 6.97141C15.8586 8.43678 15.8586 9.89075 15.8586 11.354Z" />
         <path d="M10.7676 5.75073C11.2226 5.75073 11.6724 5.75073 12.1291 5.75073C12.1291 7.61707 12.1291 9.48046 12.1291 11.3519C11.6783 11.3519 11.2262 11.3519 10.7676 11.3519C10.7676 9.48933 10.7676 7.62552 10.7676 5.75073Z" />
         <path d="M14.8022 13.9732C15.0175 14.295 15.2272 14.6081 15.4464 14.9354C15.1818 14.9354 14.9348 14.9386 14.6879 14.932C14.6522 14.9312 14.6079 14.8906 14.5847 14.8566C14.4548 14.667 14.3279 14.4753 14.2044 14.2817C14.0975 14.1144 13.9863 14.0665 13.8119 14.1273C13.8119 14.3879 13.8119 14.6505 13.8119 14.9202C13.5807 14.9202 13.356 14.9202 13.1201 14.9202C13.1201 14.8756 13.1201 14.8368 13.1201 14.7979C13.1191 14.0228 13.118 13.2477 13.1172 12.4728C13.1172 12.4394 13.1187 12.4062 13.1195 12.3729C13.1214 12.303 13.1581 12.2644 13.2272 12.266C13.6626 12.276 14.0994 12.2705 14.5331 12.3034C14.9331 12.3338 15.1915 12.6098 15.2422 13.0095C15.281 13.3167 15.2388 13.6032 14.9951 13.8252C14.9375 13.8773 14.8716 13.9202 14.8022 13.9732ZM13.815 13.4443C13.9548 13.4443 14.0902 13.4457 14.2253 13.4434C14.2823 13.4424 14.341 13.4402 14.3959 13.4263C14.508 13.3982 14.5722 13.299 14.5705 13.1708C14.569 13.0551 14.5179 12.974 14.4105 12.9607C14.2141 12.9367 14.016 12.9276 13.815 12.9119C13.815 13.0973 13.815 13.2652 13.815 13.4443Z" />
         <path d="M12.4456 13.6073C12.4394 14.2997 12.0091 14.8445 11.3579 14.9762C10.6728 15.1149 9.95359 14.632 9.83345 13.9445C9.75427 13.4912 9.80811 13.0569 10.1162 12.6945C10.4699 12.2788 10.9314 12.1304 11.4565 12.2693C11.9815 12.4082 12.3026 12.7653 12.4122 13.3012C12.4327 13.4013 12.4348 13.5051 12.4456 13.6073ZM11.7454 13.5989C11.7361 13.5231 11.7325 13.4625 11.7205 13.4034C11.6704 13.1568 11.4504 12.9403 11.215 12.9025C10.9591 12.8614 10.7154 12.9798 10.5881 13.2222C10.4515 13.4821 10.4572 13.7482 10.6022 14.0026C10.7374 14.2399 10.9466 14.344 11.2201 14.2991C11.4777 14.2566 11.6331 14.0976 11.7013 13.8519C11.7253 13.7655 11.7327 13.6741 11.7454 13.5989Z" />
         <path d="M4.51465 14.4525C4.64493 14.2876 4.77584 14.1221 4.91119 13.9506C4.9853 14.0108 5.0535 14.0691 5.12487 14.1231C5.27689 14.2384 5.43948 14.329 5.63944 14.3174C5.67829 14.3151 5.72453 14.3165 5.75388 14.2963C5.8054 14.261 5.87972 14.2122 5.88226 14.1658C5.88479 14.1183 5.82208 14.0492 5.77077 14.0211C5.68462 13.9738 5.58517 13.9508 5.491 13.9185C5.38817 13.8833 5.28407 13.8514 5.18209 13.8138C4.78935 13.6687 4.63796 13.4405 4.65105 13.018C4.66203 12.6632 4.88395 12.371 5.23994 12.2773C5.71925 12.151 6.14176 12.2718 6.50662 12.6052C6.55202 12.6468 6.55223 12.6776 6.51802 12.7264C6.41224 12.8773 6.31152 13.0319 6.20363 13.1924C6.11452 13.1318 6.03238 13.0644 5.94032 13.0167C5.84256 12.966 5.73656 12.9291 5.63099 12.8968C5.58749 12.8835 5.52795 12.8835 5.48889 12.9033C5.43103 12.9327 5.35565 12.977 5.34087 13.03C5.32145 13.0995 5.39134 13.1525 5.46186 13.1761C5.58792 13.2186 5.71503 13.2574 5.84129 13.2992C5.91879 13.3248 5.99712 13.3486 6.07208 13.3805C6.44645 13.5393 6.61473 13.807 6.58897 14.1972C6.56532 14.5562 6.32356 14.8427 5.95975 14.9426C5.46144 15.0794 4.80582 14.8581 4.51465 14.4525Z" />
         <path d="M7.93111 14.1637C7.93111 14.4268 7.93111 14.6739 7.93111 14.9268C7.70392 14.9268 7.48538 14.9268 7.25839 14.9268C7.25586 14.8819 7.25121 14.8405 7.25121 14.7991C7.24974 14.0187 7.24889 13.2383 7.24805 12.4577C7.24805 12.4275 7.24889 12.3973 7.25079 12.3671C7.2548 12.3018 7.29091 12.2647 7.3551 12.2662C7.73897 12.2744 8.12452 12.2649 8.50586 12.2997C8.95645 12.3409 9.21046 12.6127 9.27951 13.0658C9.35953 13.5917 9.04365 14.0569 8.53204 14.1447C8.37579 14.1716 8.21257 14.1587 8.05252 14.1635C8.01705 14.1646 7.98158 14.1637 7.93111 14.1637ZM7.94484 13.5257C8.09707 13.5155 8.24171 13.5117 8.38487 13.4946C8.51219 13.4794 8.58652 13.3855 8.59686 13.2497C8.60805 13.1029 8.55611 12.9912 8.43914 12.9689C8.27824 12.938 8.11312 12.9292 7.94484 12.9104C7.94484 13.1222 7.94484 13.3147 7.94484 13.5257Z" />
         <path d="M15.7939 12.942C15.7939 12.715 15.7939 12.5039 15.7939 12.2866C16.4882 12.2866 17.1795 12.2866 17.8754 12.2866C17.8754 12.4997 17.8754 12.7104 17.8754 12.9306C17.6464 12.9306 17.4177 12.9306 17.1782 12.9306C17.1782 13.5983 17.1782 14.2564 17.1782 14.9207C16.9453 14.9207 16.7232 14.9207 16.4897 14.9207C16.4897 14.2611 16.4897 13.6061 16.4897 12.942C16.2528 12.942 16.0271 12.942 15.7939 12.942Z" />
         <path d="M18.1904 13.0252C18.1904 12.8949 18.1904 12.772 18.1904 12.6432C19.6389 12.6432 21.0838 12.6432 22.535 12.6432C22.535 12.7718 22.535 12.897 22.535 13.0252C21.0874 13.0252 19.6444 13.0252 18.1904 13.0252Z" />
         <path d="M4.33023 12.637C4.33023 12.7691 4.33023 12.895 4.33023 13.0259C2.8864 13.0259 1.44721 13.0259 0 13.0259C0 12.8979 0 12.7702 0 12.637C1.4413 12.637 2.88049 12.637 4.33023 12.637Z" />
         <path d="M18.1875 13.6798C18.1875 13.5493 18.1875 13.4207 18.1875 13.2872C19.4396 13.2872 20.6883 13.2872 21.9432 13.2872C21.9432 13.4177 21.9432 13.5459 21.9432 13.6798C20.6909 13.6798 19.4421 13.6798 18.1875 13.6798Z" />
         <path d="M4.33168 13.2859C4.33168 13.4202 4.33168 13.5462 4.33168 13.6788C3.08316 13.6788 1.83865 13.6788 0.588867 13.6788C0.588867 13.5494 0.588867 13.4208 0.588867 13.2859C1.83422 13.2859 3.07894 13.2859 4.33168 13.2859Z" />
         <path d="M13.0318 2.78064C13.281 3.21223 13.5212 3.62882 13.7715 4.06231C13.717 4.06231 13.6819 4.06231 13.6467 4.06231C13.0599 4.06231 12.4729 4.06189 11.8861 4.06252C11.7018 4.06273 11.5172 4.06463 11.3329 4.06864C11.1942 4.0716 11.0945 4.0205 11.0417 3.88537C11.0189 3.82688 10.9835 3.77346 10.9463 3.70399C11.6724 3.70399 12.3893 3.70399 13.1304 3.70399C13.0529 3.56843 12.9948 3.44681 12.9184 3.33807C12.8283 3.20969 12.8118 3.09483 12.9188 2.96898C12.9613 2.91915 12.9875 2.85581 13.0318 2.78064Z" />
         <path d="M10.3264 2.78369C10.6934 3.41693 11.0532 4.03812 11.4216 4.67389C11.5019 4.53411 11.5812 4.40763 11.6488 4.27503C11.7048 4.16524 11.7778 4.10759 11.907 4.12364C11.9871 4.13356 12.0692 4.12554 12.1701 4.12554C11.9195 4.56051 11.676 4.98259 11.426 5.41629C11.3874 5.35632 11.3536 5.30797 11.3241 5.25708C10.948 4.60865 10.5736 3.95937 10.1959 3.31198C10.1252 3.19079 10.1165 3.08373 10.2122 2.9714C10.2557 2.91988 10.2837 2.85506 10.3264 2.78369Z" />
         <path d="M12.516 2.63598C12.1484 2.00148 11.7879 1.37964 11.4193 0.743243C11.3392 0.883234 11.2592 1.00971 11.1931 1.14316C11.1372 1.25612 11.0586 1.30532 10.9332 1.29307C10.8532 1.28526 10.7719 1.2916 10.6729 1.2916C10.9241 0.855151 11.1674 0.432432 11.4161 0C11.4381 0.0339949 11.456 0.0595438 11.4714 0.0863596C11.8599 0.755489 12.247 1.42546 12.638 2.09311C12.714 2.22297 12.7254 2.33805 12.6224 2.4584C12.5821 2.50549 12.5571 2.56588 12.516 2.63598Z" />
         <path d="M12.0381 3.61036C12.4 2.9824 12.7528 2.37028 13.1202 1.73282C12.9731 1.73282 12.8449 1.72248 12.719 1.73536C12.5664 1.75098 12.4604 1.71108 12.4049 1.55884C12.3827 1.49824 12.3417 1.44461 12.3041 1.37915C12.7915 1.37915 13.2672 1.37915 13.7562 1.37915C13.6654 1.53815 13.5807 1.687 13.4954 1.83565C13.1819 2.38063 12.8675 2.92497 12.5554 3.471C12.4927 3.5808 12.4101 3.63231 12.2801 3.61247C12.207 3.60128 12.131 3.61036 12.0381 3.61036Z" />
         <path d="M9.72028 3.69056C9.88308 3.69056 10.0309 3.69605 10.1781 3.68887C10.295 3.68295 10.3757 3.71864 10.424 3.82991C10.4559 3.90339 10.5005 3.97138 10.5435 4.04951C10.0554 4.04951 9.57818 4.04951 9.08789 4.04951C9.11027 4.00538 9.12864 3.96526 9.15039 3.92725C9.5256 3.27438 9.90271 2.62257 10.276 1.96864C10.3491 1.84068 10.4445 1.7784 10.5946 1.80036C10.6586 1.80965 10.7251 1.80183 10.8081 1.80183C10.4422 2.43676 10.0843 3.05817 9.72028 3.69056Z" />
         <path d="M11.9086 1.73225C11.174 1.73225 10.4578 1.73225 9.72149 1.73225C9.80046 1.86992 9.86613 1.99851 9.94531 2.11802C10.0148 2.22296 10.0205 2.31439 9.94257 2.41658C9.89421 2.47993 9.86001 2.55404 9.81144 2.63702C9.56419 2.20966 9.32454 1.79538 9.07812 1.36971C9.11761 1.36739 9.14569 1.36422 9.17399 1.36422C9.94573 1.36295 10.7177 1.36422 11.4894 1.35915C11.6463 1.35809 11.7597 1.39969 11.8136 1.55911C11.8323 1.61485 11.8701 1.66384 11.9086 1.73225Z" />
         <path d="M18.1855 14.3151C18.1855 14.1814 18.1855 14.0554 18.1855 13.9238C19.1862 13.9238 20.1826 13.9238 21.1855 13.9238C21.1855 14.0526 21.1855 14.1808 21.1855 14.3151C20.1879 14.3151 19.1912 14.3151 18.1855 14.3151Z" />
         <path d="M1.34961 14.3173C1.34961 14.1809 1.34961 14.0548 1.34961 13.9235C2.34412 13.9235 3.33483 13.9235 4.32934 13.9235C4.32934 14.0563 4.32934 14.1849 4.32934 14.3173C3.33483 14.3173 2.34602 14.3173 1.34961 14.3173Z" />
         </svg>
         
  ),
}