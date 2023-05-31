/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type BookRentalArgs = {
  name: string
  pickUpDate: string
  returnDate: string
  price: beet.bignum
}

/**
 * @category userTypes
 * @category generated
 */
export const bookRentalArgsBeet =
  new beet.FixableBeetArgsStruct<BookRentalArgs>(
    [
      ['name', beet.utf8String],
      ['pickUpDate', beet.utf8String],
      ['returnDate', beet.utf8String],
      ['price', beet.u64],
    ],
    'BookRentalArgs'
  )