/** @type {import('next').NextConfig} */

// const {withContentlayer} = require("next-contentlayer")
import {withContentlayer} from 'next-contentlayer'

const nextConfig = {
    compiler:{
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });