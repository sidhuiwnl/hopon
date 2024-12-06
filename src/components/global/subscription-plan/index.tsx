type Props = {
  type: "FREE" | "PRO";
  children: React.ReactNode;
};

export default function SubscriptionPlan({ children, type }: Props) {
  return  children ;
}
