// ComparisonTable.tsx
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { logo } from '../../assets/images';

// types.ts
import { type ReactNode } from 'react';

export interface ComparisonFeature {
  label: string;
  senditValue: ReactNode; // Allows text or icons
  traditionalValue: string;
}

export const comparisonData: ComparisonFeature[] = [
  { label: 'Cost', senditValue: 'Lower, flexible pricing', traditionalValue: 'Expensive fixed rates' },
  { label: 'Speed', senditValue: 'Same-day possible', traditionalValue: '1–3 days' },
  { label: 'Pricing', senditValue: 'Accept or bid', traditionalValue: 'Fixed' },
  { label: 'Tracking', senditValue: 'Live tracking + chat', traditionalValue: 'Limited updates' },
  { label: 'Trust', senditValue: 'Verified users + ratings', traditionalValue: 'Limited transparency' },
  { label: 'Payment', senditValue: 'Escrow protected', traditionalValue: 'Pay upfront' },
];

const ComparisonTable: React.FC = () => {
  return (
    <div className=" ">
      {/* Outer container with padding and rounded corners */}
      <div className="bg-primary text-white rounded-xl shadow-lg overflow-hidden relative">
        
        {/* Scrollable container for mobile */}
        <div className="overflow-x-auto">
          
          {/* Table Element - Minimum width on mobile forces scrolling */}
          <table className="w-full text-left min-w-[640px] ">
            
            <thead>
              <tr className="border-b-1 border-[#F8F9FA]/30">
                {/* 1st Column Header (Empty) */}
                <th className="sticky left-0 bg-primary z-10 w-fit sm:w-[30%]  px-6 py-2"></th>
                
                {/* 2nd Column Header (Sendit) - Lighter blue background */}
                <th className="w-fit sm:w-[30%] bg-primaryAlt  px-6">
                  <div className="flex items-center gap-3">
                    {/* Placeholder for Sendit Logo */}
                    <img src={logo} alt="Sendit Logo" className="w-20"/>
                  </div>
                </th>
                
                {/* 3rd Column Header (Traditional) */}
                <th className="w-fit sm:w-[30%] px-6 py-4 text-xl font-medium tracking-tight">
                  <p className='!font-bold whitespace-nowrap'>Traditional Couriers</p>
                </th>
              </tr>
            </thead>
            
            <tbody>
              {comparisonData.map((feature, index) => (
                <tr 
                  key={feature.label} 
                  className={`border-b-1 border-[#F8F9FA]/30 ${index % 2 !== 0 ? 'bg-blue-900/20' : ''}`}
                >
                  {/* 1st Column (Feature Labels) - Fixed/Sticky */}
                  <th className="w-fit sm:w-[30%] sticky left-0 bg-primary z-10 px-6 py-4 font-medium text-lg tracking-tight whitespace-nowrap">
                    <p className='whitespace-nowrap'>{feature.label}</p>
                  </th>
                  
                  {/* 2nd Column (Sendit Values) - Highlighted column */}
                  <td className="w-fit sm:w-[30%] bg-primaryAlt px-6 font-normal tracking-tight">
                    <div className="flex items-center gap-2">
                      <div className=' rounded-[50%] bg-primary'>
                        <Icon icon='material-symbols-light:check-rounded' color='white' width={20} />
                      </div>
                      <p className='whitespace-nowrap'>{feature.senditValue}</p>
                    </div>
                  </td>
                  
                  {/* 3rd Column (Traditional Values) */}
                  <td className="w-fit sm:w-[30%] px-6 tracking-tight">
                    <p className='whitespace-nowrap'>{feature.traditionalValue}</p>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
          
        </div>
        
      </div>
    </div>
  );
};

export default ComparisonTable;