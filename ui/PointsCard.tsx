import React from 'react';

export default function PointsCard({ points }: IPointsCardProps) {
  return (
    <div
      className={`fixed top-4 right-4 lg:right-[3%] flex justify-center items-center py-2 px-4 bg-primaryColor gap-2 rounded-lg`}
    >
      <p className="text-backgroundColor text-sm">
        {points || 0} pontos
      </p>
    </div>
  );
}
