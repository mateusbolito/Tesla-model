import { useEffect, useRef } from "react";
import { useModel } from "../useModel";
import { ContainerModelSection } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

export function ModelSection({
  modelName,
  overlayNode,
  children,
  ...props
}: Props) {
  const { registerModel } = useModel(modelName);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef: ref,
      });
    }
  }, [children, modelName, overlayNode, registerModel]);
  return (
    <ContainerModelSection ref={ref} {...props}>
      {children}
    </ContainerModelSection>
  );
}
