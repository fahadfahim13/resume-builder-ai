import React, { LegacyRef, useRef } from "react";

const BasicTemplate = (props: {divRef: React.RefObject<HTMLDivElement>}) => {
  const {divRef} = props; 

  return (
    <div className="w-full" ref={divRef}>
      {/* Personal Details */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center">
          <h1 className="text-3xl font-bold text-red-600">John Doe</h1>
          <h2 className="text-lg">Software Engineer | Programmer | Coder</h2>
          <h3 className="">Banasree, Dhaka, Bangladesh</h3>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm grow">+8801732297813</h4>
          <h4 className="text-sm flex-none">fahadfahim13@gmail.com</h4>
        </div>
        <hr className="border-2 my-2" />
      </div>
      {/* Professional Experience */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Professional Experience</h1>
        </div>
        <hr className="border my-2" />
        <div>
          <div className="flex justify-between my-2">
            <div className="grow">
              <h4 className="text-md font-bold">
                Full Stack Software Engineer
              </h4>
              <h5>Company Name</h5>
            </div>
            <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
          </div>
          <div className="text-wrap font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            minima adipisci asperiores eos nam quas sint a reprehenderit cum
            officiis magnam ea, praesentium, dignissimos nostrum dolorum
            doloremque aliquid rem eligendi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error inventore voluptate temporibus
            dolore illum? Molestiae nemo accusantium eveniet ratione! In
            corporis est quod aliquam quidem optio exercitationem maiores.
            Tempora, officia? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ducimus deleniti exercitationem in amet architecto
            autem veniam, et veritatis dolorum expedita eum beatae laborum odio
            praesentium, vitae ex magnam accusantium possimus?
          </div>
          <hr className="border  my-2" />
        </div>
        <div>
          <div className="flex justify-between my-2">
            <div className="grow">
              <h4 className="text-md font-bold">
                Full Stack Software Engineer
              </h4>
              <h5>Company Name</h5>
            </div>
            <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
          </div>
          <div className="text-wrap font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            minima adipisci asperiores eos nam quas sint a reprehenderit cum
            officiis magnam ea, praesentium, dignissimos nostrum dolorum
            doloremque aliquid rem eligendi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error inventore voluptate temporibus
            dolore illum? Molestiae nemo accusantium eveniet ratione! In
            corporis est quod aliquam quidem optio exercitationem maiores.
            Tempora, officia? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ducimus deleniti exercitationem in amet architecto
            autem veniam, et veritatis dolorum expedita eum beatae laborum odio
            praesentium, vitae ex magnam accusantium possimus?
          </div>
          <hr className="border my-2" />
        </div>
      </div>
      {/* Education */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Education</h1>
        </div>
        <hr className="border my-2" />
      </div>
      <div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">BUET</h4>
            <h5>B.Sc. in Computer Science and Engineering</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">Dhaka College</h4>
            <h5>H.S.C in Science</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
      </div>
      {/* Projects */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Projects</h1>
        </div>
        <hr className="border my-2 " />
        <div>
          <div className="flex justify-between my-2">
            <div className="grow">
              <h4 className="text-md font-bold">
                Full Stack Software Engineer
              </h4>
              <h5>Company Name</h5>
            </div>
            <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
          </div>
          <div className="text-wrap font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            minima adipisci asperiores eos nam quas sint a reprehenderit cum
            officiis magnam ea, praesentium, dignissimos nostrum dolorum
            doloremque aliquid rem eligendi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error inventore voluptate temporibus
            dolore illum? Molestiae nemo accusantium eveniet ratione! In
            corporis est quod aliquam quidem optio exercitationem maiores.
            Tempora, officia? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ducimus deleniti exercitationem in amet architecto
            autem veniam, et veritatis dolorum expedita eum beatae laborum odio
            praesentium, vitae ex magnam accusantium possimus?
          </div>
          <hr className="border my-2" />
        </div>
        <div>
          <div className="flex justify-between my-2">
            <div className="grow">
              <h4 className="text-md font-bold">
                Full Stack Software Engineer
              </h4>
              <h5>Company Name</h5>
            </div>
            <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
          </div>
          <div className="text-wrap font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            minima adipisci asperiores eos nam quas sint a reprehenderit cum
            officiis magnam ea, praesentium, dignissimos nostrum dolorum
            doloremque aliquid rem eligendi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error inventore voluptate temporibus
            dolore illum? Molestiae nemo accusantium eveniet ratione! In
            corporis est quod aliquam quidem optio exercitationem maiores.
            Tempora, officia? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ducimus deleniti exercitationem in amet architecto
            autem veniam, et veritatis dolorum expedita eum beatae laborum odio
            praesentium, vitae ex magnam accusantium possimus?
          </div>
          <hr className="border my-2" />
        </div>
      </div>
      {/* Achievements */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Achievements</h1>
        </div>
        <hr className="border my-2 " />
      </div>
      <div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">BUET</h4>
            <h5>B.Sc. in Computer Science and Engineering</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">Dhaka College</h4>
            <h5>H.S.C in Science</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
      </div>
      {/* Skills */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Skills</h1>
        </div>
        <hr className="border my-2 " />
      </div>
      <div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">BUET</h4>
            <h5>B.Sc. in Computer Science and Engineering</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">Dhaka College</h4>
            <h5>H.S.C in Science</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
      </div>
    </div>
  );
};

export default BasicTemplate;
