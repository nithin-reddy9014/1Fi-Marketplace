import "./EmiPlan.css";

function EmiPlan({ plan, selected, onSelect }) {
  return (
    <button
      className={selected ? "emi-plan selected" : "emi-plan"}
      onClick={() => onSelect(plan)}>
      <div>
        <strong>₹{plan.monthly.toLocaleString("en-IN")}</strong>

        <span> / month</span>
      </div>

      <p>{plan.months} months</p>

      <small>No-cost EMI · {plan.interest} interest</small>
    </button>
  );
}

export default EmiPlan;
