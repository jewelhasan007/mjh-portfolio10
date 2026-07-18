"use client";

import * as React from "react";

import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";

import Image from "next/image";

import {
  ExternalLink,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";

import {
  projects,
  type Project,
} from "@/lib/content";



// =======================
// Filters
// =======================

const websiteCategories = [
  "All",
  "Landing Page",
  "Website",
  "E-commerce",
  "Portfolio",
  "Shopify",
];


const industries = [
  "All",
  "Plumbing",
  "Car Service",
  "Parlour",
  "Digital Agency",
  "Doctor",
  "Consultant",
  "Pet Service",
  "Real Estate",
];





// =======================
// Animation
// =======================


const containerVariants: Variants = {

  hidden:{},

  show:{

    transition:{
      staggerChildren:0.08,
    },

  },

};



const cardVariants: Variants = {


  hidden:{

    opacity:0,

    y:25,

  },


  show:{


    opacity:1,

    y:0,


    transition:{

      duration:0.5,

      ease:"easeOut",

    },


  },


};






// =======================
// Project Card
// =======================


function ProjectCard({

  project,

}:{

  project:Project;

}) {


const [hovered,setHovered] =
React.useState(false);




return (

<motion.article

variants={cardVariants}

onMouseEnter={()=>
setHovered(true)
}

onMouseLeave={()=>
setHovered(false)
}


className="
group relative flex flex-col
overflow-hidden rounded-2xl
border border-[var(--border)]
bg-[var(--surface)]
shadow-sm
transition-all duration-300
hover:shadow-xl
"

>



{/* Featured */}

{

project.featured && (

<div

className="
absolute left-4 top-4
z-20 flex items-center gap-1
rounded-full
bg-gradient-to-r
from-[var(--primary)]
to-[var(--violet)]
px-3 py-1
text-xs font-medium
text-white shadow-md
"

>

<Sparkles className="h-3 w-3"/>

Featured


</div>


)

}




{/* Image */}

<div

className="
relative aspect-[16/10]
overflow-hidden
bg-[var(--surface-2)]
"

>


<Image

src={project.image}

alt={project.title}

fill

sizes="
(max-width:768px)100vw,
(max-width:1200px)50vw,
33vw
"

className="
object-cover
transition-transform
duration-500
group-hover:scale-105
"

/>



<AnimatePresence>


{

hovered && (

<motion.div


initial={{
opacity:0,
}}


animate={{
opacity:1,
}}


exit={{
opacity:0,
}}



className="
absolute inset-0
hidden items-center
justify-center gap-3
bg-black/50
backdrop-blur-sm
md:flex
"


>


{

project.liveUrl && (

<Button
size="sm"
asChild
>

<a

href={project.liveUrl}

target="_blank"

rel="noopener noreferrer"

>


<ExternalLink
className="mr-1 h-4 w-4"
/>

Live Demo


</a>


</Button>

)

}





{

project.repoUrl && (

<Button

size="sm"

variant="secondary"

asChild

>


<a

href={project.repoUrl}

target="_blank"

rel="noopener noreferrer"

>


<FaGithub
className="mr-1 h-4 w-4"
/>


Code


</a>


</Button>


)


}




</motion.div>


)

}


</AnimatePresence>



</div>







{/* Content */}


<div

className="
flex flex-1 flex-col
gap-3 p-5
"

>



{/* Tags */}


<div className="flex flex-wrap gap-2">


<span

className="
rounded-full
bg-[var(--primary)]/10
px-3 py-1
text-xs
text-[var(--primary)]
"

>

{project.category}


</span>



<span

className="
rounded-full
bg-[var(--surface-2)]
px-3 py-1
text-xs
text-[var(--ink-soft)]
"

>

{project.industry}


</span>


</div>





<h3

className="
font-display
text-lg font-semibold
text-[var(--ink)]
"

>

{project.title}


</h3>





<p

className="
text-sm leading-relaxed
text-[var(--ink-soft)]
"

>

{project.description}


</p>






<div

className="
mt-auto flex flex-wrap
gap-2 pt-3
"

>

{

project.tech.map((tech)=>(


<span

key={tech}

className="
rounded-full
border border-[var(--border)]
bg-[var(--surface-2)]
px-2.5 py-1
text-xs
text-[var(--ink-soft)]
"

>


{tech}


</span>


))

}


</div>






{/* Mobile Buttons */}


<div

className="
flex items-center gap-4
pt-3 md:hidden
"

>


{

project.liveUrl && (

<a

href={project.liveUrl}

target="_blank"

rel="noopener noreferrer"

className="
flex items-center gap-1
text-sm font-medium
text-[var(--primary)]
"

>


<ExternalLink
className="h-4 w-4"
/>

Live Demo


</a>


)


}





{

project.repoUrl && (

<a

href={project.repoUrl}

target="_blank"

rel="noopener noreferrer"

className="
flex items-center gap-1
text-sm font-medium
text-[var(--ink-soft)]
"

>


<FaGithub
className="h-4 w-4"
/>


Source


</a>


)


}



</div>




</div>



</motion.article>


);


}









// =======================
// Main Component
// =======================


export function ProjectsShowcase2(){



const [category,setCategory] =
React.useState("All");


const [industry,setIndustry] =
React.useState("All");






const filteredProjects =
React.useMemo(()=>{


return projects.filter((project)=>{


const categoryMatch =

category==="All"

||

project.category===category;



const industryMatch =

industry==="All"

||

project.industry===industry;



return categoryMatch && industryMatch;


});


},[
category,
industry
]);






return (

<section

id="projects"

className="
relative mx-auto max-w-6xl
scroll-mt-28
px-5 py-24
sm:px-8
"

>



<motion.div

initial={{
opacity:0,
y:20,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
margin:"-80px",
}}


className="
mx-auto max-w-2xl
text-center
"

>


<span

className="
text-sm
text-[var(--primary)]
"

>

Website Templates


</span>



<h2

className="
mt-3 text-3xl
font-bold
text-[var(--ink)]
sm:text-4xl
"

>

Industry Website Solutions


</h2>



<p

className="
mt-4
text-[var(--ink-soft)]
"

>

Explore ready-made website concepts
for different businesses and industries.


</p>


</motion.div>








{/* Website Type Filter */}


<div className="mt-10">


<h3

className="
mb-3 text-center
text-sm font-medium
"

>

Website Type


</h3>



<div

className="
flex flex-wrap
justify-center gap-2
"

>


{

websiteCategories.map((item)=>(


<button

key={item}

onClick={()=>
setCategory(item)
}


className={`

rounded-full
px-4 py-2
text-sm
transition-all


${
category===item

?

"bg-[var(--primary)] text-white shadow-md"

:

"border border-[var(--border)] text-[var(--ink-soft)] hover:text-[var(--primary)]"

}

`}


>


{item}


</button>


))


}



</div>


</div>







{/* Industry Filter */}



<div className="mt-8">


<h3

className="
mb-3 text-center
text-sm font-medium
"

>

Business Industry


</h3>



<div

className="
flex flex-wrap
justify-center gap-2
"

>


{

industries.map((item)=>(


<button

key={item}

onClick={()=>
setIndustry(item)
}


className={`

rounded-full
px-4 py-2
text-sm
transition-all


${
industry===item

?

"bg-[var(--primary)] text-white shadow-md"

:

"border border-[var(--border)] text-[var(--ink-soft)] hover:text-[var(--primary)]"

}

`}


>


{item}


</button>


))


}



</div>


</div>








<motion.div

variants={containerVariants}

initial="hidden"

whileInView="show"

viewport={{
once:true,
margin:"-80px",
}}


className="
mt-12 grid
grid-cols-1 gap-6
sm:grid-cols-2
lg:grid-cols-3
"

>



{

filteredProjects.map((project)=>(


<ProjectCard

key={project.title}

project={project}


/>


))


}



</motion.div>





</section>


);


}