import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";

export default function Control({ handleMoreLessIngredient }) {
  const controls = ["Cheese", "Meat", "Salad"];
  return (
    <div>
      <Card>
        <CardHeader className="add-ingredient-header">
          Add ingredients
        </CardHeader>

        <CardBody>
          {controls.map((control) => (
            <div className="d-flex" key={control}>
              <div className="me-5 ms-auto flex-fill align-items-center">
                {control}
              </div>
              <Button
                className="btn btn-danger btn-sm m-1"
                onClick={() => handleMoreLessIngredient(control, -1)}
              >
                less
              </Button>
              <Button
                className="btn btn-success btn-sm m-1"
                onClick={() => handleMoreLessIngredient(control, 1)}
              >
                More
              </Button>
            </div>
          ))}
        </CardBody>

        <CardFooter className="text-center">Price: BDT</CardFooter>
      </Card>
    </div>
  );
}