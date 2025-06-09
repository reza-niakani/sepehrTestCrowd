/* eslint-disable no-unused-vars */
import { Dialog, Transition } from '@headlessui/react';
import DataContext from 'comon/context/MainContext';
import Status from 'comon/GlobalyComponnetsUsed/Status';
import BuyUnit from 'pages/BuyUnit/BuyUnit';
import RegisterFinancialReport from 'pages/RegisterFinancialReport/RegisterFinancialReport';
import RegisterPlan from 'pages/RegisterPlan/RegisterPlan';
import { Fragment, useContext } from 'react';

export default function GlobalyModal() {
  const { modal, setModal } = useContext(DataContext);

  const ComponentHandler = () => {
    switch (modal?.type) {
      case 'buyUnit':
        return <BuyUnit />;
      case 'failed':
        return <Status />;
      case 'success':
        return <Status />;
      case 'registerPlan':
        return <RegisterPlan />;
      case 'registerFinancialReport':
        return <RegisterFinancialReport />;
      default:
        break;
    }
  };

  const isOpen = modal ? true : false;
  const closeModal = () => setModal();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="w-full relative z-[100] " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-100"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="relative inset-0 bg-black/25" />
          </Transition.Child>

          <div
            className="fixed inset-0 overflow-y-auto "
            style={{ backgroundColor: ' rgba(24, 24, 26, 0.5)' }}>
            <div className=" flex min-h-full  items-center justify-center   p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="lg:w-[30%]  max-w-[1440px] w-[95%] min-h-[500px] flex justify-start items-center flex-col transform   overflow-y-hidden  z-[10000]    align-middle  transition-all">
                  {ComponentHandler()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
