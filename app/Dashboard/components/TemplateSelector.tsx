import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast';
import { CarouselApi } from '@/components/ui/carousel';
import { useGetResumeMutation } from '@/lib/redux/APIs/resume';
import { useDispatch } from 'react-redux';
import { setResume } from '@/lib/redux/Features/Resume/Slice';
import { ResumeState } from '@/lib/redux/Features/Resume/types';
import { useRouter } from 'next/navigation';

const TemplateSelector = (props: { goBack: () => void; userInput: string; api: CarouselApi }) => {
    const { goBack, userInput, api } = props;
    const dispatch = useDispatch();
    const router = useRouter();

    const [getResume, {
      data,
      isSuccess,
      isError
    }] = useGetResumeMutation();
  
    useEffect(() => {
      if (isSuccess && data) {
        dispatch(setResume(data as ResumeState));
        toast({
          title: "Successfully Generated Resume",
          description: "Your Resume has been generated successfully!!",
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        router.push('/Resume');
      }
      if (isError) {
        toast({
          title: "Couldn't Generate Resume",
          description: "Something wrong happened!!",
          variant: "destructive",
        });
      }
    }, [isError, isSuccess]);

    const generateResume = () => {
      if (userInput === "") {
        api?.scrollPrev();
        return;
      }
      getResume(JSON.stringify({userInput}));
    };
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl'>Select Template</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200 flex justify-center align-middle">Basic</div>
        </div>
        <div className='flex justify-between'>
            <Button variant="secondary" onClick={goBack}>Back</Button>
            <Button onClick={generateResume}>Generate</Button>
        </div>
    </div>
  )
}

export default TemplateSelector