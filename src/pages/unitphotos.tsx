/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import { parseUrl } from '../components/Image'
import Image from 'next/image'
import { supabase } from '../utils/supabaseClient'

const PHOTOS = [
    'up/img_1.jpg',
    'up/img_2.jpg',
    'up/img_3.jpg',
    'up/img_4.jpg',
    'up/img_5.jpg',
]

function UnitPhotos() {
    return (
        <div className="container text-center text-primary mt-12">
            <Head>
                <link href="/bootstrap.css" rel="stylesheet" />
                <script
                    defer
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <h1>Unit Photos</h1>
            <div
                id="carouselExampleIndicators"
                className="carousel slide w-3/4 mx-auto pt-12"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            src={
                                supabase.storage
                                    .from('photos')
                                    .getPublicUrl(PHOTOS[0]).publicURL ?? ''
                            }
                            className="block w-full"
                            alt={PHOTOS[0]}
                            width={2000}
                            height={1128}
                        />
                    </div>
                    {PHOTOS.slice(1).map((photo) => (
                        <div key={photo} className="carousel-item">
                            <Image
                                src={
                                    supabase.storage
                                        .from('photos')
                                        .getPublicUrl(photo).publicURL ?? ''
                                }
                                className="block w-full"
                                alt={photo}
                                width={2000}
                                height={1128}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default UnitPhotos
