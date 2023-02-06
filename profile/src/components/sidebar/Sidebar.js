import React from 'react'
import SubMenu from './SubMenu';

export default function Sidebar(props) {

    return (
        <div className="sidebar">
            <div className="sidebar__logo bg_pri_blue">
                <svg width="143" height="40" viewBox="0 0 143 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="143" height="40" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_360_493" transform="translate(0 -0.018375) scale(0.005 0.017875)" />
                        </pattern>
                        <image id="image0_360_493" width="200" height="58"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA6CAYAAAD1AhaMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTI3VDE1OjExOjI4KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEwLTI3VDE1OjExOjI4KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0yN1QxNToxMToyOCswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxZmYzMTZkZC00ZGNmLWQ4NDAtYTViZC0xMmE4MzgyODViMDYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxZmEzMmQwNi02ZTdkLTRiNGYtOTc1ZS0zNzczMzBkNDYxMDQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNTkzZDJlMy0zYmNhLTYwNGQtYjZiMy03YjAxNGNlNzJlNjYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI1OTNkMmUzLTNiY2EtNjA0ZC1iNmIzLTdiMDE0Y2U3MmU2NiIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0yN1QxNToxMToyOCswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZmYzMTZkZC00ZGNmLWQ4NDAtYTViZC0xMmE4MzgyODViMDYiIHN0RXZ0OndoZW49IjIwMjAtMTAtMjdUMTU6MTE6MjgrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5cxiYpAAARK0lEQVR4nO2de7hf45XHPysnl8pdQuoSKZ5SDFV1ezDUZRQ1mWemVNWYqjIZ2kEFVa3Lgw5GPSNFXfK4BqU002i00RlEUPdrxCSVBkWaICSHBCeJfOeP9e7z2+d3fpf923v/fvuc5Hyf5/fkZL/vXmvtd+/1vu9a73rXC02EpLGSrJk8+tBaSBohaVTRcvR6SNpN0o1Fy9GH/CCpTdLNknYpWpZeDUmjJc2VNKNoWfqQHyT9SI7ti5al1yL0MneGhpxWtDx9yAeSviapQ9LqdUlB+jeB5pnAN5tAd52HpP7AeGBr4Bkze6BFfLcGrgcGAqtawXOthKTxklaqhGlFy7S2QNJQSVNjbbtG0vkt4DtM0mMxvivXpREkN0jaRtIidcW0ouUqApK2lnS9pAclXSxpZA40/0PdsUbSQTmIXIvv9WU8e7yCSOonaYKkP0ia1uw2SiLQCElPVniB0woVrMkIvevhZdc2kDSvrB2mKIO7W9KGkt6u0L6S9NvsT1KV78kV+PUGBTmpTOaPVJTnTZLJXX+VMK0QoVoESWfLDde9YtfGV2iH9yRtmIHPgVXaV5IWKocRqgLP/cOH1RsV5IkKcqeajvbLQZ4fAMfkQKdXIfRIP8IN16skDQtFiwGVVV8OdGRgt0mNshHA+hlod4OkzYEbgfXypNtCvFnh2nstlyL0bB/X6N2mtVyoFkDS4Aq91KWhzCSdJWlZrOz4jPy+WaONl0kam8+TdT7bgzX49YYRZGtJT8ld0pL0rKTRrRZiS0lv1GjItVlBLqjwrB2S9ovVOSVc/0kO/HaKvexyvCxpUFYeMV5X1nmnPV5BACQND9/nXEmfbzXzIZJm1WnItVJBVNseeE3SRnIvyl2SzsiJ50BJT1fheWkePAKff03wTnuLguwn6Y/y6WJqpF0ovAzYJwvjXoyRwARgAdAOrAGG4HbCVsDGwIfA1Wb2UB4MzWylpAuAaXS1GxcBV+XBQ+5o+K+k1fPg2WS0AweZ2fIsRBpWEEknACc0UL/TvWlmKr/WKCIalehnpZUQjwPbAzviyjAQN8LfAGYCfzGzFcBDaeWqBDObLulE4DxgI+BPwLFm9kZW2pI2BW4Ghia8pV/U7k16p8OA/YA9gbF4J/Q68DDwiJl1lNXfBNgFfyebAcNwp0i7pIXAy8CLZvZWw7I1UlnS3sAMvMdMgmXA/NjfhwGbAzc0wrcMJ5rZs0GewcAd+IeaBteb2eR6lSQNx2U/GtgVfwHVsBhXlJuA+5MooaQzgSXANDOr6W2RNBQYh49Su4Tf2SmVHbn98hvgkKS34B/cx+H/l5vZHZJuAHZIIwNwr5ldEOT5Dh6utE2Vus8AFwD3An+Ld9YHAvXc6Evxzu024B4z+yilrJUhaTNJCxLMUauhXdJISXtmoCFJB8RkGirprQy0fprguY+SNCcl/RmSdkvA4+5Q/015oOdESYdK2kXStuH3ZUkHSfqefHV7frjnsYzv9dKUzxbhtECnmo2UBBdL6i/puoT1V0l6JPybBs9LOixJ+ySaYkn6DN7rb5n+VbAyIpeBBvhwG0eW4LlPqxXIF/YmAUdloH8wsLekC4GfmVm57BGithmLB3pGwZ7Cn0/AACqvW6VeX5F0NHBa2vsDojbM8h5mAZfitl0S9MdHj7T4EvBr+ah3mpm1V6uYdKHwInwYWycgj179A9mUI8IQ4BLgRvmUsBEYbuMMIp9F3U5I2hm4Mm+6KdCO2xo/KID3ccB0uQ1TEXUbR9IxFCN8IQjKcS+wU86kjwFukVT46rSkMcAtuEeuaLThdkRRW7P3xkeTiguJNRVEPn/+OcUJ31KEadVduLu2GTgcmKQC9+nL95RcC/xNUTKUYSj1DexmYw/g2tA2XVBVQSR9Fu9lRjRRsB4DSW3A1birsJmYAJzYZB61cA7wTwXy76k4HPi38osVFUTSAGAy1V1tayO+izdSK3CRpJb34MFz8+NW8+1FOE/SuPiFaiPIecA/NF+enoFgpDV9d14MI4BLJLXMQJaHh1xLc7ZZry3YEDg1fqHbC5J0BB7GvS7hVNIvNqbFobTIMyhpfWAKsEEr+PVyfFseWQCUKYikHfF5eFurpSoIq4P34tgCeBulNYimxTaFUeoX5O+V6+mYg9taE4B3G7hvFLGpdudwGz6UW4DWxs0Xiw58Ua6oZ9432CLNzBTyQ+BbTaTfE7EC+BczewFA0io89CcpDpd0pZmt6RcItMqD09MwjGJTFA0I/JuiIJIOpbW2VU/BzEg5An4DLGzg/p2ALaAUlXkucERu4lXGwCbTT4Mv4mEHReIQct4yC51G+S00v9174nT80fh/QijJ/zVw/xBgN/Ap1g7A/sCTVSpvCwxvXEbAIyijaN52PG6nJy067k36Z8sL25Dz3u/gpj8eeA34c4Uqo0i/GCp8fh9F8zbSM7cKg9R9U9fKijWrY1fgjv64Zu1TLVxa0gO4AqXBw2b2j2X0io79iSNrz90BzMWnpmkVfyj5rzetBk43s9WVCiV9A48YSEv7W2b2clrhKuAefP/M5TnROxc4u+xaoyPddgD9zGx12r0E6zgEnIT3NFdkpJXrNMXMVE05eijeMbNJwPfwfS5Z0Ybbd/Ffox3zOEkDe1Jv3tswB7g5fIhX4LsK+5AObQBmdg2wLzCVGlsRWoTRwIg+BUmPh8ws8j69DrxSoCxrDczsOTx6/JOCRRkCDOtTkPSYF/0RNkK9Xpwoax2G49OiIjEQGNynIOlRvnd8aSFSrJ3oT/EbuQYAA/sC19KjfPtsn6MjP1TbmpwUq2ncrVtJhu4bRPqQGOX7ZGplOulDY1iJf+Rpv885ZN+6IGBhn4Kkx9bRHyEa4XMFyrK2YTlupH8m5f2bAR+a2TtZBWm2gjRj2qGyv4ua2hwgqc3MPsVfyHYZ6c3HF23j04sxeEIDA54C/krpeQ1fYCzCmG12m3+IR16MTHn/aDx0KnPWyWYrSNIEc40g3qsMIH0vkxU7ASdJug3fpZclZOU+4Cgz62boS5qIfyjnB2WMlw0HjpTUv4ULg/1ofnzXcjwBX5ZR+QxJU81sURZBmq0ge0r6ZzyM4CvA78lugJ0u6fVA52xav9EpguGhEWfiqUCz4BozWypPtByloPkEeCHwMDNbE/brRJ3Ou2Y2H5jc4iQQbcCP5dkgPwsMNbP782RgZpI0H9g9A5lxeKqlI8ys4dV5SUfho3fdig+kzF4Xx9LwGyVpjxzorQi/rFgkP+evSHws6QuhrSfFrr8maUjsPfST9Fys/LZGX3qM1jdykPsDeab3MwPNx+rUr4VuqWjl2SXzwAOSEse6Sdpe0m3h3ttaZaSPxNcN8pq7NpqArRpm4dteRyWsvwS3Az7CI3A3wnvRcrTjXpgIQ/Cp4CJ86tAReG6JLzguCPXK7atyxN9X3mHm7wX5luOJ6jai9ugcee2atdnrCXyWkHU9ZH/gUUk34gGaf8Lfn/A2XA+39b6M70D8e0pJvJ9Z171Yc3F37cF16v0WT736JB5YF2U03wAPVjwWT25t+A6+X9E1JegYfD/4bDN7P9w7CI8CXr8B++FlSlPUVxPeUw8z8DPQHwfejtKjShoV5Ps2viMxt0N6EmI28BfCxqWMGA2cAUwE3gLeD9cH4LbjBlTudBev6wryCZ7tu5qCvAv8u5l1hobLD8gZjO+HWGxmM4AZ8pQ6B5rZZaFe1LaK3I3yadKm+Mf2rpk9lVTQYIN8l1KP2qlUgVc0onwaKZz8GIHRBJ9+TBEH4CPF981sSozOGHn2+I7wbDOBmZJuxtNAdbq2mw0zWy7pf6iQqyoD2nDDP4nxvxKYU/RyftEYhB9KU+nciKXA183sLkmD5FnVH8MXoV7Ce/Onwlx5iJlNBb4PnRkpXwq/6fLjwCbiqfvn4L3jbEknJxVUvo/mVuDp8LsgVnwGbtC/AJwqaZyk64AXY3I8KmmPUP8l4DAzmyLPqn68pEfCM70UZHxW0jmSRpnZLDwLS16jVlL8kuxOnbSYS5IAVEm/z8lYWiJpfUk7q3jDOML54RnPqlAWfeyjJd1Xh84sSRvH2my/WNmbkn5X496DY/ddHrv+qrob6S/Gyn8ZK7sidv0BdT+nPcIC+dQpum+YpP+u82zPK5zxJ+kQdT9yYGIoy9VIDzT7y485KALnQTIDKPNqZAz98J656FDmclxD195iLu4iNDw38UGxsneAx+i61XQf4DrFplWxsrHA18LfrwIflPFuJGlE3Fb5tMrf+wNfwA3RBXTtgbek67EBF1FKQ9qB72s5GvgpfuAR+J79WyStF6aTDzYgbyaEKeFlreIXwwp89EqkIHnuc2jDvTiN5ClqOsxsGW5cRx/TdDP7GNgZODJWdRawq5ntFcqmx8rG42s9lbAUN3S/iB8tFn/+ZoSoPAnsFfiVn/+xBYDctXxc7Po5ZnaKmd1uZufgqVgjxdsTn2IB/LoJ8tbCvfj6WStxU1hjSqQgiQ3JBLBw9NXsHGnmAjO7B0+wBm4rABxAyfhdDZwVnQloZm/ji4Qfx8jER5o4zjezO81sRdgQ9GysLO9QkXbgGDN7IbT13XTd7Rjx+wqlZBFrgKGSJkQ/XJHiI/1Xw78v0kK7IEQPnEbJ89RsvIaPoECylfSn8QMqx9WrWAf9KCU2+B3ub84K4R9uXh/ZWfixANH5dZvGypZRytAS4U18NIjaZmwVuuUdQupToRJgCe4ejbCGrlOzCPH32Q9PdFALUf12fO0jcvs2Pe2Pmc2TOzSm0Nx9Iitxz97b0YW6CmJm7ZLuwHvLLHiX0oc3DU9oNiYjzavwXjsX96OZrZAfSxb1rHF7YTDuM18SuzacrjFY5fZFhPKPKEloSNpATCvjV43XirL/z6Rkd0T8V+LfSBtud4HHYcW/mzdTyNgwzOx2SZsBFzeRzVnBzupE0nWQq4DvUHnVOAnagQlm9gGAmS2WNAk3EtPibuAnlObGuaAsuO2J2N+D8XM9zohdO4GuEaeP5yhKsxfmyqfON5nZrfELknYH5pWd4bcnJQW8hhbaJGZ2iaRP8e8m7zW8c8ys2znxiYarcL70qaSbe74HHBl86XH8nPQekam4EbmK5g65M/G1hQinSZoq6YfyxbP4WRuv0tVoT4P4iLExcIPc9btzjQNA0+JRuir0f8pP9P2cpC9Jmox3EK9Iul2lo+Oi02EnA6e0Or2Qmf0MD2V/PSeS7wPHmVndE4/rQr5YtrwBX/ILqnEMsnxV+n8boLdK0mXyMI3Ij7+ogfvLUXcEk7S7pLfr0Fkm6cDYPfuWlf9dGc17YmWPxK6fUIX+qaE8Hqx4a+y+y2PXy9dPNgnyRTg9VrajfJ0mjigIMcJqudGOpK0kLZQvIJafDPCc0qPLyJUEkjaVr/8sq0O7GlbJj9+ueZBRQ8OUmV0t6Wl8mnEIpaCuLrLj6whTgOuCC7UavcWSxuNpMk+g+rl57XjI/BVmFh91VuFDfNoz7p6vV8HMnpR//BfigY3xNKEdwMPAuWb2RNmtteyHuH0Rr/cr4Ot0PTfkE0pxQmuq3BenV2mkqXifmb0oV94LKb3PKAhxNWHF3szuCwqxAz4b6FTqGO4kvcfzj43eYGYLgZMlXYmvJY3Hv59ae5BW4iP9/cDtFd5Zdz6NChZBfhrsHrg7cEBg/lc8VGF2cDE2Qm8wHv+/E6X4oQ/w3LLPm9lraWXNC5K2xXcOjsRlm2dmL1WoNwxfrIvwSmR/hfLPU7JdlpvZvFjZIHwNY9PA4xXgz2a2StJ2lJTlvahN5MZrZB92AC/Hgg4HANtTshveMrPFFWTeKtQbhRvwr+DvMYrrsp6cgVN+QsEWeLtvjn9DA/HvchnuTJgPLAhrXInw/4Rv/rbzGUi3AAAAAElFTkSuQmCC"
                        />
                    </defs>
                </svg>
            </div>
            <div className="sidebar__infor">
                <div className="sidebar__infor__img">
                    <img src={"https://cdn-icons-png.flaticon.com/512/1177/1177568.png"} alt="anh_nhan_vien" />
                </div>
                <div className="sidebar__infor__employee">
                    <p>XXXX</p>
                    <p>XXX</p>
                </div>
            </div>
            {/* <div className="sidebar__sub__menu">
            <ul>
                <li>
                    <a href="#">Thông báo chung</a>
                 </li>
                <li>
                    <a href="#">Thông báo của tôi</a>
                </li>
                <li>
                    <a href="#">Tạo</a>
                </li>
            </ul>
        </div> */}
            {/* <div className="sidebar__personal__information bg_pri_blue">
            <p>
                <BiBriefcase />
                Nghiệp vụ
            </p>
        </div>
        <div className="sidebar__sub__menu">
            <ul>
                <li>
                    <a href="#">Thông tin phòng ban</a>
                 </li>
                <li>
                    <a href="#">Việc của tôi</a>
                </li>
                
            </ul>
        </div> */}
            <SubMenu
                userPermission={props.userPermission}
            />
        </div>
    )
}
