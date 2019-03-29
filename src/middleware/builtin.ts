import { Middleware, AnyMiddlewareArgs } from './types';

/**
 * Middleware that ignores messages from this bot user (self) when we can tell. Requires the
 * meta context to be populated with `app_bot_id`.
 */
export function ignoreSelfMiddleware(): Middleware<AnyMiddlewareArgs> {
  return ({ next }) => {
    // TODO
    // emit error if the botId is not defined
    // if (msg.isBot() && msg.isMessage() && msg.body.event.subtype === 'bot_message') {
    //   let bothFalsy = !msg.meta.app_bot_id && !msg.meta.bot_id
    //   let bothEqual = msg.meta.app_bot_id === msg.meta.bot_id
    //   if (!bothFalsy && bothEqual) {
    //     return
    //   }
    // }
    next();
  };
}

/**
 * Middleware that ignores messages from any bot user
 */
export function ignoreBotsMiddleware(): Middleware<AnyMiddlewareArgs> {
  return ({ next }) => {
    // TODO
    // if (msg.isBot() && msg.isMessage() && msg.body.event.subtype === 'bot_message') {
    //   return
    // }
    next();
  };
}
