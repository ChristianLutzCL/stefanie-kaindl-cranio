'use client';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Image from 'next/image';
import img1 from '../../../public/image/4.jpg';
import img2 from '../../../public/image/5.jpg';

function Content() {
  return (
    <section className='font-inter flex pt-40'>
      <div className='flex w-full flex-col items-center justify-center'>
        <Typography variant='h2' className='font-inter mb-12 mt-8 text-white'>
          Angebote & Preise
        </Typography>
        <div className='grid md:grid-cols-2 gap-4'>
          <Card className='font-inter mt-6 w-96 rounded-md'>
            <CardHeader color='blue-gray' className='relative h-56 rounded-md'>
              <Image src={img1} alt='card-image' className='h-full w-full' />
            </CardHeader>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='font-inter mb-2'>
                Cranio Kinder
              </Typography>
              <Typography variant='lead' color='blue-gray' className='font-inter mb-2'>
                40 - 60 Minuten · 70€
              </Typography>
              <Typography className='font-inter'>
                Cranio für Kinder ist eine einfühlsame, sanfte Therapie, die das
                craniosacrale System berührt. Es fördert Entspannung, unterstützt die
                kindliche Entwicklung und wirkt auf spielerische Weise ausgleichend.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button className='bg-parchment-400'>Termin vereinbaren</Button>
            </CardFooter>
          </Card>
          <Card className='mt-6 w-96 rounded-md'>
            <CardHeader color='blue-gray' className='relative h-56 rounded-md'>
              <Image src={img2} alt='card-image' className='h-full w-full' />
            </CardHeader>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='font-inter mb-2'>
                Cranio Erwachsene
              </Typography>
              <Typography variant='lead' color='blue-gray' className='font-inter mb-2'>
                60 - 90 Minuten · 90€
              </Typography>
              <Typography className='font-inter'>
                Cranio für Erwachsene ist eine sanfte, manuelle Therapie, die auf dem
                Schädel und dem Craniosacral-System basiert. Sie fördert Entspannung,
                Stressabbau und körperliches Gleichgewicht.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button className='bg-parchment-400 font-inter'>Termin vereinbaren</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Content;
