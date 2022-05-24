declare namespace VPUtils {
  /**
   *
   * @desc 判断是否为String
   * @param {String} obj
   * @return {Boolean}
   */
  export function isString(obj: string): boolean

  /**
   *
   * @desc 判断是否为Number
   * @param {String} obj
   * @return {Boolean}
   */
  export function isNumber(obj: string): boolean
}

declare module "VPUtils" {
  export = VPUtils
}
