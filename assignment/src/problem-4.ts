/** @format */

{
   //     Problem 4:

   type Circle = {
      shape: "circle";
      radius: number;
   };

   type Rectangle = {
      shape: "rectangle";
      width: number;
      height: number;
   };


   const calculateShapeArea = (params: Circle|Rectangle) => {
    if(params.shape == 'circle') {
        const area =  Math.PI * Math.pow(params.radius,2);
        return area;
    }
    if(params.shape == 'rectangle') {
        const area = params.width * params.height;
        return area;
    }
    
   }

   const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
   console.log(circleArea);

   const rectangleArea = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    });

    console.log(rectangleArea);



}
