import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function VehicleCard({ cardTitle, title, description, content, footer }: any) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{cardTitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      </Card>
    </>
  );
}

export default VehicleCard;
