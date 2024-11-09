"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const Page = () => {
  const [cars, setCars] = useState<Array<{
    name: string;
    price: string;
    imageUrl?: string;
    imageBlur?: string;
  }>>([
    { name: 'Toyota Camry', price: '$25' },
    { name: 'Honda Civic', price: '$22' },
    { name: 'Ford Mustang', price: '$27' },
    { name: 'Tesla Model 3', price: '$38' },
    { name: 'BMW 3 Series', price: '$43' },
    { name: 'Mercedes C-Class', price: '$44' },
    { name: 'Audi A4', price: '$39,100' },
    { name: 'Hyundai Sonata', price: '$24' },
    { name: 'Nissan Altima', price: '$24' },
    { name: 'Lexus ES', price: '$41'},
    { name: 'Volkswagen Passat', price: '$27' },
    { name: 'Chevrolet Malibu', price: '$23' },
    { name: 'Kia K5', price: '$24' },
    { name: 'Mazda 6', price: '$24'},
    { name: 'Subaru Legacy', price: '$23'},
    { name: 'Acura TLX', price: '$38'}
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarImages = async () => {
      if (!UNSPLASH_ACCESS_KEY) {
        setError('Unsplash API key is not configured');
        setLoading(false);
        return;
      }

      try {
        const updatedCars = await Promise.all(
          cars.map(async (car) => {
            try {
              const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(car.name + ' car')}&per_page=1`,
                {
                  headers: {
                    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
                  }
                }
              );
              
              if (!response.ok) {
                throw new Error('Failed to fetch image');
              }

              const data = await response.json();
              const imageUrl = data.results[0]?.urls.regular;
              const blurHash = data.results[0]?.blur_hash;

              return {
                ...car,
                imageUrl: imageUrl || '/api/placeholder/400/300',
                imageBlur: blurHash
              };
            } catch (error) {
              console.error(`Error fetching image for ${car.name}:`, error);
              return { ...car, imageUrl: '/api/placeholder/400/300' };
            }
          })
        );

        setCars(updatedCars);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch images');
        setLoading(false);
      }
    };

    fetchCarImages();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen top-20 lg:ml-80 lg:mr-10 m-5 absolute pb-20 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Cars</h1>
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4  mx-auto">
        {cars.map((car, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="relative aspect-video mb-4 bg-gray-200 rounded-lg overflow-hidden">
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                  </div>
                ) : (
                  car.imageUrl && (
                    <Image
                      src={car.imageUrl}
                      alt={car.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={car.imageBlur || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEwSzIrLisxKys4P1AzODM4NyscPk9XRERGV0tLS0BCVkFGQEdGREb/2wBDAReKipqqqqrAwsKEgoLExsKChoWFhsbGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhob/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='}
                      onError={(e) => {
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.src = '/api/placeholder/400/300';
                      }}
                    />
                  )
                )}
              </div>
              <h2 className="text-lg font-semibold mb-2">{car.name}</h2>
              <div className="text-xl font-bold text-blue-600">{car.price} <span className='text-base text-black'>/week</span></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;