import React from "react";

function Card({username = "HC", post = "Not assign yet"}) {
    //console.log(props);
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://vizualmexico.com.mx/wp-content/uploads/2021/02/perfil-profesional-hombre-locacion.jpg" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, reprehenderit.
                    </p>
                </blockquote>
                <figcaption>
                    <div>
                        {username}
                    </div>
                    <div>
                        {post}
                    </div>
                </figcaption>
            </div>
            </figure>
        </div>
    )
}

export default Card