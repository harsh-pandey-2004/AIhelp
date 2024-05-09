import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Revolutionize Your Business with <span className='text-blue-500'>AI Assistants</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            title="Enhanced Customer Satisfaction"
            description="Deliver immediate, tailored, round-the-clock assistance to your clients, elevating satisfaction scores by up to 25% and curbing customer turnover."
            image="/images/satisfied-customers.png"
          />
          <BenefitCard
            title="Increased Operational Efficiency and Output"
            description="Automate a significant portion—up to 60%—of mundane tasks, streamline operations, and empower your staff to concentrate on strategic endeavors."
            image="/images/operational-efficiency.png"
          />
          <BenefitCard
            title="Actionable Business Intelligence"
            description="Acquire invaluable insights into customer actions, preferences, and market trends via AI-driven analytics and reporting, featuring more than 50 customizable dashboards and metrics."
            image="/images/business-intelligence.png"
          />
          <BenefitCard
            title="Competitive Advantages"
            description="Position yourself among industry frontrunners who have experienced up to a 50% surge in conversion rates and achieved a 30% swifter issue resolution using our AI Assistant SaaS."
            image="/images/competitive-advantages.png"
          />
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg element">
      <div className="mb-4">
        <img src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg" alt={title} className="w-full h-auto" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BenefitsSection;
