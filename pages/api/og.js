import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';


export const config = {
    runtime: 'edge',
};

export default function handler(req) {


    try {
        const { searchParams } = new URL(req.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const hasBg = searchParams.has('bg');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'My default title';
        const bg = hasBg
            ? searchParams.get('bg')?.slice(0, 100)
            : 'none';


        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 64,
                        background: `#0d0d0d`,
                        color: 'white',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        flexDirection: 'column',
                        padding: 64
                    }}
                >
                    <div
                    style={{
                        position: 'absolute',
                        width: '1328',
                        height: '728',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        background: 'linear-gradient(0deg, rgba(13, 13, 13, 1) 0%, rgba(13, 13, 13, 0.8) 100%)'
                    }
                    }> </div>

                    <svg
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 1200,
                            height: 600,
                            mixBlendMode: 'overlay'
                        }}
                        width="1200" height="600" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_124_17)">
                            <rect width="1200" height="600" fill="#1E2021"/>
                            <g style="mix-blend-mode:overlay" opacity="0.15">
                                <path d="M933.788 6.17114C967.159 -11.3011 980.048 -52.5199 962.576 -85.891C945.103 -119.263 903.885 -132.152 870.513 -114.68L397.037 133.219C363.665 150.692 350.776 191.91 368.248 225.282C385.721 258.655 426.939 271.544 460.311 254.071L933.788 6.17114Z" fill="url(#paint0_linear_124_17)"/>
                                <path d="M791.175 819.38C753.538 817.825 724.287 786.053 725.842 748.413L747.892 214.422C749.447 176.785 781.218 147.532 818.856 149.087C856.493 150.642 885.745 182.412 884.19 220.051L862.139 754.042C860.585 791.68 828.812 820.936 791.175 819.38Z" fill="url(#paint1_linear_124_17)"/>
                                <path d="M92.8915 218.308C113.056 186.49 155.196 177.043 187.014 197.208L638.439 483.3C670.257 503.465 679.704 545.605 659.539 577.423C639.375 609.241 597.234 618.688 565.416 598.524L113.991 312.431C82.1734 292.266 72.7261 250.125 92.8915 218.308Z" fill="url(#paint2_linear_124_17)"/>
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_124_17" x1="742.163" y1="-175.747" x2="588.662" y2="315.138" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white"/>
                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_124_17" x1="902.413" y1="172.763" x2="707.618" y2="795.704" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white"/>
                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_124_17" x1="417.218" y1="266.741" x2="335.212" y2="528.99" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white"/>
                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_124_17">
                                <rect width="1200" height="600" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <img
                        width="967"
                        height="480"
                        src={`https://aidude.info/img/ai/${bg}`}
                        style={{
                            position: 'absolute',
                            left: 570,
                            top: 87,
                            width: 967,
                            height: 480,
                            objectFit: 'cover',
                            objectPosition: '0px 0px',
                            borderRadius: 20,
                            zIndex: '2',
                            transform: 'rotate(5.51deg)',
                            boxShadow: '0px 64px 74px -20px rgba(0, 0, 0, 0.25)',
                        }}
                        alt=''/>

                    <svg
                        style={{
                            position: 'absolute',
                            top: 54,
                            left: 54,
                            width: 70,
                            height: 70,
                            zIndex: 20,
                        }}
                        width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M836.055 275.814C860.947 250.922 860.947 210.562 836.055 185.67C811.162 160.777 770.803 160.777 745.91 185.67L392.737 538.842C367.845 563.735 367.845 604.094 392.737 628.987C417.63 653.88 457.989 653.88 482.882 628.987L836.055 275.814Z" fill="white"/>
                        <path d="M935.668 1040.93C901.664 1050.04 866.712 1029.86 857.6 995.854L728.33 513.412C719.219 479.408 739.398 444.455 773.403 435.344C807.407 426.233 842.359 446.412 851.47 480.417L980.74 962.859C989.852 996.863 969.672 1031.82 935.668 1040.93Z" fill="white"/>
                        <path d="M145.188 699.567C154.299 665.563 189.251 645.383 223.255 654.495L705.698 783.765C739.702 792.876 759.882 827.828 750.77 861.832C741.659 895.836 706.707 916.016 672.703 906.905L190.26 777.635C156.256 768.523 136.076 733.571 145.188 699.567Z" fill="white"/>
                    </svg>
                    <span
                        style={{
                            fontWeight: 600,
                            width: 470,
                            zIndex: 20,
                            marginTop: 64
                        }}
                    >{title}</span>


                </div>

            ),
            {
                width: 1200,
                height: 600,
            },
        );
    } catch (e) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}

